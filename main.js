const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const fs = require('fs')

const pathToData = path.join(__dirname, 'data', 'tasks.json')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height:800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  //win.webContents.openDevTools();
  win.loadFile('index.html')
}

ipcMain.handle('getTasks', async () => {
  const data = fs.readFileSync(pathToData, 'utf-8');
  return JSON.parse(data);
})

ipcMain.handle('saveTasks', async (_event, tasks) => {
  fs.writeFileSync(pathToData, JSON.stringify(tasks, null, 2));
  return true;
})

app.whenReady().then(() => {
  createWindow()
})