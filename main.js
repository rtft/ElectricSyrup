

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;



//Wait till app is ready to go
app.on('ready', function(){


    //Create new window
    mainWindow = new BrowserWindow({});

    //Load HTML into new window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: true

    }));

    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    Menu.setApplicationMenu(mainMenu);


});


//Create menu template

const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label: 'item'
            },
            {
                label: 'item2'
            },
            {
                label: 'quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q': 'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];
