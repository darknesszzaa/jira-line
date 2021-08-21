import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import firebase from "firebase/app"
import "firebase/firestore"
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { SignInLineDto } from './dto/signin-line.dto';
import * as jwt from 'jsonwebtoken';
import { LineNotifyDto } from './dto/line-notify.dto';
import { LineConnection } from './constants';
const line = require('./utils/line');
const lineBody = require('./utils/line-body');

@Injectable()
export class AppService {

  constructor() {
    let firebaseConfig = {
      apiKey: "AIzaSyDH_GbXtMr37xpUBPmZpnBmqWJ4lGnY1kM",
      authDomain: "jira-line.firebaseapp.com",
      projectId: "jira-line",
      storageBucket: "jira-line.appspot.com",
      messagingSenderId: "447047365847",
      appId: "1:447047365847:web:b1f167da39d73a08ceec92",
      measurementId: "G-K2NN4NX8HF"
    };
    firebase.initializeApp(firebaseConfig);
  }

  async getUsers(): Promise<any> {

    let users = await firebase.firestore().collection('users').get()
    let userList = users.docs.map((doc) => {
      let res = doc.data();
      res.id = doc.id;
      return res;
    });
    userList.forEach(function (v) { delete v.password });
    return userList;
  }

  async createUsers(data: RegisterDto): Promise<boolean> {

    let firestore = firebase.firestore()

    const re = /^[a-zA-Z0-9._-]+@rvconnex.com$/;
    let isEmailValid = re.test(String(data.email).toLowerCase());

    if (!isEmailValid) {
      throw new HttpException('Email\'s invalid.', HttpStatus.BAD_REQUEST);
    }

    let users = await firestore.collection("users").where("email", "==", data.email).get();
    let userData = users.docs.map(doc => doc.data());
    if (userData.length > 0) {
      throw new HttpException('Email\'s already exist.', HttpStatus.CONFLICT);
    }

    firestore.collection("users").doc(data.email).set({
      lineId: data.lineId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email
    })

    return true;
  }

  async signInLine(data: SignInLineDto): Promise<any> {

    let firestore = firebase.firestore();

    let users = await firestore.collection("users").where("username", "==", data.username).get();
    let userData = users.docs.map((doc) => {
      let res = doc.data();
      res.id = doc.id;
      return res;
    })[0];

    const isPass = bcrypt.compareSync(data.password, userData.password);
    if (isPass) {
      const token = jwt.sign({ id: userData.id }, '1234');
      userData['token'] = token;
      delete userData.password;
      return userData;
    } else {
      throw new HttpException('Password\'s incorrect', HttpStatus.UNAUTHORIZED);
    }
  }

  async lineNotify(data: LineNotifyDto): Promise<any> {

    let firestore = firebase.firestore();

    await firestore.collection("users").doc(data.email).get().then(function (docs) {
      if (!docs.data()) {
        throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
      }
    })

    await firestore.collection("users").doc(data.email).update({
      logTimeHours: 8
    })
      .then(() => {
        console.log("Document successfully updated!");
      });

    return true;
  }

  async lineWebHook(data): Promise<any> {

    console.log(data.events[0]);

    const lineId = data.events[0].source.userId;
    const replyToken = data.events[0].replyToken || 'no replyToken';

    let firestore = firebase.firestore();
    let users = await firestore.collection("users").where("lineId", "==", lineId).get();
    let userData = users.docs.map((doc) => {
      let res = doc.data();
      res.id = doc.id;
      return res;
    })[0];

    let body;

    if (userData) {
      if (data.events[0].message.type && data.events[0].message.type === 'text') {
        const text = data.events[0].message.text || 'no text'
        switch (text.toUpperCase()) {
          case 'LOG-TIME':

            if (!userData.logTimeHours) {
              userData.logTimeHours = 0;
            }

            body = line.logTimeToday(replyToken, userData.logTimeHours);
            break;
          case 'MY-PROFILE':
            // body = getBodyDailyHealthReport(url, userData.data.token, replyToken);
            // line.sendReplyBodyToLine(replyToken, body);
            break;

          default:
            break;
        }
      } else {
        body = lineBody.getBodySignIn(LineConnection.URL_API, lineId, replyToken);
      }
      line.sendReplyBodyToLine(body);

      return true;
    }
  }
}
