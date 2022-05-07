const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win //Alce global para despues si se elimina queden limpios los recursos.


app.on('ready', () =>{

    win = new BrowserWindow({
        titleBarStyle: 'hidden',
        title: 'IMC',
        width: 900,
        height: 600,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'ejemplo.html'),
        protocol: 'file',
        slashes: true
    }));

    win.setMenu(null); //Eliminar la barra menu superior
})

app.on('window-all-closed', () =>{
    app.quit()
})