const { BrowserWindow, app } = require('electron')

const createWindow = () => {
  const tray = require('./Tray')
  const toggle = (win) => {
    if (win.isVisible()) win.hide()
    else win.show()
  }

  const win = new BrowserWindow({
    width: 900,
    height: 600,
    movable: false,
    resizable: false,
    frame: false,
    fullscreenable: false,
    skipTaskbar: true, 
  })
  win.loadURL('http://localhost:3366/')
  tray.on('click', () => toggle(win))
}

app.whenReady().then(() => {
  createWindow()
})