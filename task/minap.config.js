const {
  resolve
} = require('path');
const r = url => resolve(__dirname, url);
module.exports = {
  json: {
    pages: [
      'pages/topic/index',
      'pages/index/index',
      'pages/logs/logs',
    ],
    window: {
      "navigationBarTextStyle": "black",
      "navigationBarTitleText": "信息系统",
      "navigationBarBackgroundColor": "#F8F8F8",
      "backgroundColor": "#F8F8F8",
      "navigationStyle": "custom",
      "backgroundTextStyle": "dark"
    },
    subpackages: [{
      "root": "shiku",
      "pages": [
        "pages/home/index"
      ]
    }]
  },
  components: [
    'components/cell-group/cell-group',
    'components/cell/cell',
    'components/icon/icon',
    'components/loading/loading',
    'components/button/button',
    'components/row/row',
    'components/col/col',
    'components/badge/badge',
    'components/badge-group/badge-group',
  ],
  app: r('../app.js')
}