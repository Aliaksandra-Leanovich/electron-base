import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  let window = new BrowserWindow({
    width: 800,
    height: 800,
    show: false,
    backgroundColor: "#2980b9",

    // frame: false, // hide titlebar and buttons and cant move window

    titleBarStyle: "hidden", // hide titlebar  and cant move window

    //to make it moved add to the css
    // .titlebar {
    //   height: 34px;
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   -webkit-app-region: drag;
    // }

    //modeint is not safe
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("renderer/index.html");

  window.on("ready-to-show", () => {
    window.show();
  });
});
