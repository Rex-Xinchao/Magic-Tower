'use strict'

import {app, BrowserWindow, ipcMain} from 'electron'
import {autoUpdater} from 'electron-updater'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let mainWindow
const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:9080` : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    title: 'Magic Tower',
    width: 1480,
    height: 748,
    useContentSize: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})

/************************************************************************************************************************/
// 监听渲染层是否执行全屏化
ipcMain.on('setFullScreen', (isFullScreen) => {
  mainWindow.setFullScreen(isFullScreen)
})
ipcMain.on('fullScreen', () => {
  mainWindow.setFullScreen(true)
})
ipcMain.on('exitFullScreen', () => {
  mainWindow.setFullScreen(false)
})

// 监听渲染层是否执行关闭
ipcMain.on('close', () => mainWindow.close())

// 监听读取指定key值
// 监听读取指定key值
ipcMain.on('checkForUpdate', (event) => {
  checkForUpdate()
})

/************************************************************************************************************************/

function checkForUpdate () {
  let message = {
    error: '应用程序更新失败......',
    checking: '检测应用程序是否有更新！',
    updateAva: '检测到更新，后台正在下载......',
    updateNotAva: '应用程序已经是最新版本'
  }
  let path = require('path').join(__static, '/build')
  autoUpdater.setFeedURL(path)
  autoUpdater.on('error', function (error) {
    if (error) throw error
    sendUpdateMessage(message.error)
  })
  autoUpdater.on('checking-for-update', function () {
    sendUpdateMessage(message.checking)
  })
  autoUpdater.on('update-available', function (info) {
    sendUpdateMessage(message.updateAva)
  })
  autoUpdater.on('update-not-available', function (info) {
    sendUpdateMessage(message.updateNotAva)
  })
  // 更新下载进度事件
  autoUpdater.on('download-progress', function (progressObj) {
    mainWindow.webContents.send('downloadProgress', progressObj)
  })
  /**
   *  event Event
   *  releaseNotes String - 新版本更新公告
   *  releaseName String - 新的版本号
   *  releaseDate Date - 新版本发布的日期
   *  updateURL String - 更新地址
   * */
  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl) {
    autoUpdater.quitAndInstall()
  })
  autoUpdater.checkForUpdates()
}

// 通过main进程发送事件给renderer进程，提示更新信息
function sendUpdateMessage (text) {
  mainWindow.webContents.send('message', text)
}
