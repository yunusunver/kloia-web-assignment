const electron = require('electron');
const ipcMain = electron.ipcMain;
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');

let mainWindow;
let settingsWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 900, height: 680, webPreferences: { webSecurity: false}});
  settingsWindow = new BrowserWindow({width: 600, height: 600, parent: mainWindow, show: false});

  mainWindow.loadURL(isDev ? `file://${path.join(__dirname, '../dist/index.html')}` : `file://${path.join(__dirname, '../dist/index.html')}`);
  settingsWindow.loadURL(isDev ? 'http://localhost:3000/settings' : `file://${path.join(__dirname, '../dist/index.html')}`);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => mainWindow = null);



  settingsWindow.on('close', (e) => {
    e.preventDefault();
    settingsWindow.hide();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});