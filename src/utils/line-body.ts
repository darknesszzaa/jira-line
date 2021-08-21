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