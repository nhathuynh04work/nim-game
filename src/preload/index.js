import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {
    openExternal: (url) => ipcRenderer.invoke("open-external", url),
    saveMatchToFile: async (data) => {
        return await ipcRenderer.invoke("save-match-to-file", data);
    },
    onSaveGameState: (callback) => {
        ipcRenderer.on("save-game-state", callback);
    },
    confirmGameStateSaved: () => {
        ipcRenderer.send("game-state-saved");
    },
    removeAllListeners: (channel) => {
        ipcRenderer.removeAllListeners(channel);
    }
};

if (process.contextIsolated) {
    try {
        contextBridge.exposeInMainWorld("electron", electronAPI);
        contextBridge.exposeInMainWorld("api", api);
    } catch (error) {
        console.error(error);
    }
} else {
    window.electron = electronAPI;
    window.api = api;
}
