import { app, shell, BrowserWindow, ipcMain, screen, dialog } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import icon from "../../resources/icon.png?asset";
import path from "path";
import { fileURLToPath } from "url";
import { writeFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Declare mainWindow globally
let mainWindow;
let isQuitting = false; // Add this flag to prevent infinite loop

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width,
        height,
        minWidth: width,
        minHeight: height,
        show: false,
        autoHideMenuBar: true,
        ...(process.platform === "linux"
            ? {
                  icon
              }
            : {}),
        webPreferences: {
            preload: join(__dirname, "../preload/index.js"),
            contextIsolation: true,
            sandbox: false
        }
    });

    mainWindow.on("ready-to-show", () => {
        mainWindow.maximize();
        mainWindow.show();
    });

    mainWindow.webContents.setWindowOpenHandler((details) => {
        shell.openExternal(details.url);
        return {
            action: "deny"
        };
    });

    // HMR for renderer base on electron-vite cli.
    // Load the remote URL for development or the local html file for production.
    if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
        mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
    } else {
        mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    // Set app user model id for windows
    electronApp.setAppUserModelId("com.electron");

    // Default open or close DevTools by F12 in development
    // and ignore CommandOrControl + R in production.
    // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
    app.on("browser-window-created", (_, window) => {
        optimizer.watchWindowShortcuts(window);
    });

    // Save saved match to file system
    ipcMain.handle("save-match-to-file", async (_event, savedMatchJson) => {
        const now = new Date();
        const formatted = now
            .toISOString()
            .replace(/T/, "_")
            .replace(/:/g, "-")
            .replace(/\..+/, "");
        const defaultName = `nim-${formatted}.json`;

        const { canceled, filePath } = await dialog.showSaveDialog({
            title: "Save Match",
            defaultPath: defaultName,
            filters: [{ name: "JSON Files", extensions: ["json"] }]
        });

        if (canceled || !filePath) return { success: false, canceled: true };

        try {
            await writeFile(filePath, savedMatchJson);
            return { success: true, filePath };
        } catch (err) {
            console.error("Failed to save file:", err);
            return { success: false, error: err.message };
        }
    });

    ipcMain.handle("open-external", async (_event, url) => {
        await shell.openExternal(url);
    });

    // Handle the confirmation from renderer
    ipcMain.on("game-state-saved", () => {
        console.log("Game state saved successfully");
        // Set the flag and quit for real this time
        isQuitting = true;
        app.quit();
    });

    createWindow();

    app.on("activate", function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Handle app closing
app.on("before-quit", async (event) => {
    const currentURL = new URL(mainWindow.webContents.getURL());
    const currentRoute = currentURL.hash.substring(2);

    // If we're currently not in a match, don't do anything
    if (currentRoute !== "match") return;

    // If we're already in the process of quitting, don't prevent it
    if (isQuitting) {
        return;
    }

    if (mainWindow && !mainWindow.isDestroyed()) {
        event.preventDefault(); // prevent immediate quit

        try {
            // Send message to renderer to save game state
            mainWindow.webContents.send("save-game-state");
        } catch (error) {
            console.log("Error saving game state: ", error);
            isQuitting = true;
            app.quit();
        }
    }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
