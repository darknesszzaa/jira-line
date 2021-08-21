function getBodySignIn(url, userId, replyToken) {
  const body = {
    replyToken: replyToken,
    messages: [{
      type: 'flex',
      altText: 'Register',
      contents: {
        type: 'bubble',
        hero: {
          type: 'image',
          url: 'https://yt3.ggpht.com/a/AGF-l7_zOh3DStGbUiDILMTVPPdvQ4XzACADFXvhNQ=s900-c-k-c0xffffffff-no-rj-mo',
          action: {
            type: 'uri',
            uri: url
          }
        },
        body: {
          type: 'box',
          layout: 'vertical',
          spacing: 'md',
          action: {
            type: 'uri',
            uri: url
          },
          contents: [{
            type: 'text',
            text: 'RVPD Notify',
            size: 'xl',
            weight: 'bold',
            align: 'center'
          }]
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: [{
            type: 'spacer',
            size: 'xxl'
          },
          {
            type: 'button',
            style: 'primary',
            color: '#3949ab',
            action: {
              type: 'uri',
              label: 'Register',
              uri: url + '/register/?lineid=' + userId
            }
          }
          ]
        }
      }
    }]
  };
  return body;
}

function logTimeToday(replyToken, logTimeHours) {
  const body = {
    replyToken: replyToken,
    messages: [{
      type: 'flex',
      altText: 'LogTime',
      contents: {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://lh3.googleusercontent.com/proxy/p9I4GYIwp88S2RlhhRc35zIuPpuDeYNrkl9oPeRUHrgWw7IMtt0UGJHDXY1et6r6BJlB3fz83y9pC7wGBloZdYGEfwuUBCm5Xsa2nFU8kE5i_WHEelQcgNU3Kd2bwStmiDBImb4cXtfccWLtvU6J_DRiPK8Eo7YGWAmRTRK-",
          size: "full",
          aspectMode: "cover",
          action: {
            type: "uri",
            uri: "http://linecorp.com/"
          },
          aspectRatio: "20:13"
        },
        body: {
          type: "box",
          layout: "vertical",
          contents: [
            {
              type: "text",
              text: "Log Time Today",
              weight: "bold",
              size: "xl"
            },
            {
              type: "box",
              layout: "vertical",
              margin: "lg",
              spacing: "sm",
              contents: [
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Log TIme",
                      size: "md",
                      flex: 4,
                      weight: "regular"
                    },
                    {
                      type: "text",
                      text: logTimeHours + " Hr.",
                      wrap: true,
                      size: "lg",
                      flex: 5,
                      color: "#FF0000"
                    }
                  ]
                },
                {
                  type: "box",
                  layout: "baseline",
                  spacing: "sm",
                  contents: [
                    {
                      type: "text",
                      text: "Update Time",
                      size: "md",
                      flex: 4
                    },
                    {
                      type: "text",
                      text: new Date(),
                      wrap: true,
                      size: "md",
                      flex: 5
                    }
                  ],
                  paddingTop: "xl"
                }
              ],
              paddingTop: "xl"
            }
          ]
        }
      }
    }]
  }

  return body;
}

function profile(replyToken, firstName, lastName) {
  const body = {
    replyToken: replyToken,
    messages: [
      {
        type: 'flex',
        altText: 'Welcome',
        contents: {
          type: 'bubble',
          body: {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'box',
                layout: 'horizontal',
                contents: [
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'image',
                        url: 'https://yt3.ggpht.com/a/AGF-l7_zOh3DStGbUiDILMTVPPdvQ4XzACADFXvhNQ=s900-c-k-c0xffffffff-no-rj-mo',
                        aspectMode: 'cover',
                        size: 'full',
                      },
                    ],
                    cornerRadius: '0px',
                    width: '72px',
                    height: '72px',
                  },
                  {
                    type: 'box',
                    layout: 'vertical',
                    contents: [
                      {
                        type: 'text',
                        text: firstName + '   ' + lastName,
                        size: 'sm',
                        weight: 'bold',
                        flex: 1,
                      },
                    ],
                  },
                ],
                spacing: 'xl',
                paddingAll: '20px',
              },
            ],
            paddingAll: '0px',
          },
        },
      },
    ],
  };

  return body;
}

module.exports = {
  getBodySignIn,
  logTimeToday,
  profile
}