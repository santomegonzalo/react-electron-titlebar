const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow = null;

function createWindow() {
  if (mainWindow === null) {
    mainWindow = new BrowserWindow({
      frame: false,
      width: 600,
      height: 600,
    });

    mainWindow.loadURL('http://localhost:3000');
    mainWindow.openDevTools();

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  } else {
    mainWindow.show();
  }
}

app.on('ready', () => {
  createWindow();
});

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
