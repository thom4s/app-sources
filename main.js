const { app, BrowserWindow, screen } = require('electron');

app.whenReady().then(() => {
  const displays = screen.getAllDisplays();
 
  // Calculer la largeur et la hauteur totale
  const width = displays.reduce((acc, display) => acc + display.bounds.width, 0);
  const height = Math.max(...displays.map(display => display.bounds.height));
 
  const win = new BrowserWindow({
    width,
    height,
    frame: false,      // Masque la barre de titre et URL
  });

  win.loadURL('https://planets-production.up.railway.app/');
});