import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import firebase from "firebase/app"
import "firebase/firestore"
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { SignInLineDto } from './dto/signin.dto';
import * as jwt from 'jsonwebtoken';
import { LineNotifyDto } from './dto/line-notify.dto';

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
    const salt = bcrypt.genSaltSync(10);
    data.password = await bcrypt.hashSync(data.password, salt);

    let users = await firestore.collection("users").where("username", "==", data.username).get();
    let userData = users.docs.map(doc => doc.data());
    if (userData.length > 0) {
      throw new HttpException('Username\'s already exist.', HttpStatus.CONFLICT);
    }

    firestore.collection("users").add({
      username: data.username,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
    });
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

    let users = await firestore.collection("users").doc(data.userId).get();
    
    console.log(users.data())

    if (!users) {
      throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
    }


    return true;
  }

}
