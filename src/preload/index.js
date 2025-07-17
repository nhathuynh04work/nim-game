import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";
import path from "path";
import { fileURLToPath } from "url";

// Needed to get __dirname in ES module style
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Custom APIs for renderer
const api = {
    audioPaths: {
        background: path.join(__dirname, "../../resources/sounds/background.mp3"),
        match: path.join(__dirname, "../../resources/sounds/match.mp3"),
        win: path.join(__dirname, "../../resources/sounds/win.mp3")
    },
    openExternal: (url) => ipcRenderer.invoke("open-external", url) // 🔥 FIXED
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
