const fs = require('fs')
const os = require('os')
const storage = require('electron-json-storage')
const path = require('path')

function GetScreenPx () {
  this.w = Number(window.innerWidth ? window.innerWidth : document.documentElement.clientWidth)
  this.h = Number(window.innerHeight ? window.innerHeight : document.documentElement.clientHeight)
  this.mainStyle = document.getElementById('main-style')
}

GetScreenPx.prototype = {
  method_screenPx: function () {
    this.mainStyle.innerHTML = 'html {font-size: ' + parseFloat(this.w / 19.2) + 'px}'
  }
}

const PATH = {
  logPath: path.join(__static, '/log/'),
  filePath: path.join(__static, '/file/')
}

const privateFun = {
  logic_screenPx: function () {
    let screenPx = new GetScreenPx()
    screenPx.method_screenPx()
    return true
  },
  getSystemInfo: function (type, callback) {
    switch (type) {
      case 'mac':
        // getmac包
        break
      case 'dataPath':
        os.tmpdir()
        break
    }
  },
  // 更新用户信息
  setJson: function (key, value, callback) {
    storage.set(key, value, function (error) {
      if (error) throw error
      if (callback) {
        callback()
      }
    })
  },
  // 获取指定key值
  getJson: function (key, callback) {
    storage.get(key, function (error, data) {
      if (error) throw error
      if (callback) {
        callback(data)
      }
    })
  },
  // 写入日志记录
  writeFile (fileName, data) {
    let _path = PATH.filePath + fileName
    console.log(_path)
    fs.writeFile(_path, data, function (err) {
      console.log(err)
      if (!err) {
        console.log('写入成功。')
      }
    })
  },
  readFile (fileName) {
    let _path = PATH.filePath + fileName
    fs.readFile(_path, 'utf8', function (err, data) {
      console.log(data)
      if (err) return console.log(err)
    })
  },
  // 上传日志记录
  uploadLog (type) {
    let filePath = PATH.logPath
    let timestamp = new Date().getTime()
    let fileName = 'log' + timestamp + '.json'
    let data = ''
    if (fs.existsSync(filePath + fileName)) {
      data = fs.readFileSync(filePath + fileName).toString()
      let arr = JSON.parse(data)
      let uploadArr = []
      try {
        arr.forEach(function (item) {
          uploadArr.push(item)
        })
      } catch (e) {
        console.log(e)
      }
      console.log(arr)
    }
  }
}

export default privateFun
