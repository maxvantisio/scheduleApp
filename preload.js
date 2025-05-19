const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('tasks', {
  getTasks: () => ipcRenderer.invoke('getTasks'),
  saveTasks: () => ipcRenderer.invoke('saveTasks')
})