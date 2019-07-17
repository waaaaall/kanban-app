// Node.jsのrequireスタイルでインポート
const bodyParser = require('body-parser')

// `Express`アプリケーションインスタンスを受け取る関数をエクスポート
module.exports = app => {
    app.use(bodyParser.json())
    //TODO APIの実装内容
}