import { LineConnection } from "src/constants";

const request = require('request')

function sendReplyBodyToLine(body) {
  try {
    request({
      method: `POST`,
      uri: `${LineConnection.LINE_API}/reply`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer {${LineConnection.LINE_TOKEN}}`
      },
      body: JSON.stringify(body)
    },
    function (error, response, body) {
      if (error) {
        return console.error('failed:', error);
      }
      console.log('successful!  Server responded with:', body);
    })
    
  } catch (error) {
    console.log(error)
  }
}

function sendTextReplyToLine(replyToken, text) {
  const body = {
    replyToken: replyToken,
    messages: [
      {
        type: `text`,
        text: text
      }
    ]
  }
  sendReplyBodyToLine(body)
}

module.exports = {
  sendReplyBodyToLine,
  sendTextReplyToLine
}
