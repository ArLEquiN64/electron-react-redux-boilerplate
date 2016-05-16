import electron from 'electron';
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

/*
 const crashReporter = electron.crashReporter;
 crashReporter.start({companyName: 'ArLE', submitURL: 'https://submit/URL/here'});
 */

let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/../../static/index.html`);

    if(process.env.NODE_ENV === 'development') {
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if(mainWindow === null){
        createWindow();
    }
});
