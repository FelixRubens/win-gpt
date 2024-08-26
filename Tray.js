const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, './', 'public', 'assets', 'icon.png')

const createTray = () => {
  const tray = new Tray(iconPath)
  tray.setToolTip('Chat Gpt')

  return tray
}

module.exports = createTray()