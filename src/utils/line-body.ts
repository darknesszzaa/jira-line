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

function convertTZ(date, tzString) {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

function getBodyReplyLogTimeToday(replyToken, logTimeHours, logTimeWeek, logTimeMonth) {
  const convertedDate = convertTZ(new Date(), "Asia/Bangkok") 
  const body = {
    replyToken: replyToken,
    messages: [{
      type: 'flex',
      altText: 'LogTime',
      contents: {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://graphicriver.img.customer.envatousercontent.com/files/196418042/cartoon%20alarm%20clock%20preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=61ec5d35abc5c6661a03298de821c2ba",
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
                      text: "Log Daily",
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
                      text: "Log Weekly",
                      size: "md",
                      flex: 4,
                      weight: "regular"
                    },
                    {
                      type: "text",
                      text: logTimeWeek + " Hr.",
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
                      text: "Log Monthly",
                      size: "md",
                      flex: 4,
                      weight: "regular"
                    },
                    {
                      type: "text",
                      text: logTimeMonth + " Hr.",
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
                      text: "Check Time",
                      size: "md",
                      flex: 4
                    },
                    {
                      type: "text",
                      text: convertedDate.toLocaleString(),
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

function getBodyLogTimeToday(lineId, logTimeHours, logTimeWeek, logTimeMonth) {
  const convertedDate = convertTZ(new Date(), "Asia/Bangkok") 
  const body = {
    to: lineId,
    messages: [{
      type: 'flex',
      altText: 'LogTime',
      contents: {
        type: "bubble",
        hero: {
          type: "image",
          url: "https://graphicriver.img.customer.envatousercontent.com/files/196418042/cartoon%20alarm%20clock%20preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=61ec5d35abc5c6661a03298de821c2ba",
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
                      text: "Log Daily",
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
                      text: "Log Weekly",
                      size: "md",
                      flex: 4,
                      weight: "regular"
                    },
                    {
                      type: "text",
                      text: logTimeWeek + " Hr.",
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
                      text: "Log Monthly",
                      size: "md",
                      flex: 4,
                      weight: "regular"
                    },
                    {
                      type: "text",
                      text: logTimeMonth + " Hr.",
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
                      text: "Check Time",
                      size: "md",
                      flex: 4
                    },
                    {
                      type: "text",
                      text: convertedDate.toLocaleString(),
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

function getBodyProfile(replyToken, firstName, lastName) {
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
  getBodyReplyLogTimeToday,
  getBodyLogTimeToday,
  getBodyProfile
}