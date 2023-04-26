import { app, BrowserWindow, Menu, MenuItem } from "electron";

const MenuTeplate = [
  {
    label: "MyApp",
    submenu: [
      {
        role: "about",
      },
      {
        type: "separator",
      },
      {
        role: "services",
      },
      {
        type: "separator",
      },
      {
        role: "hide",
      },
      {
        role: "hideothers",
      },
      {
        role: "unhide",
      },
      {
        type: "separator",
      },
      {
        role: "quit",
      },
    ],
  },
  {
    label: " Custom Menu",
    submenu: [{ label: "Custom Item " }],
  },
];

const ctxMenuTemplate = [
  {
    label: "Option 1",
  },
  {
    type: "separator",
  },
  {
    label: "Option 2",
  },
  {
    label: "Option 3",
  },
];

const ctxMenu = new Menu.buildFromTemplate(ctxMenuTemplate);

const createMenu = () => {
  const menu = new Menu.buildFromTemplate(MenuTeplate);
  Menu.setApplicationMenu(menu);
};

const createWindow = () => {
  let window = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile("renderer/index.html");

  window.on("ready-to-show", () => {
    window.show();
  });

  window.webContents.on("context-menu", (event, params) => {
    ctxMenu.popup(window, params.x, params.y);
  });
};

app.on("ready", () => {
  createMenu();
  createWindow();
  //SECOND VARIANT

  //FIRST VARIANT
  // menu.append(
  //   new MenuItem({
  //     label: "MyApp",
  //     submenu: [
  //       new MenuItem({
  //         label: "Option 1",
  //         click() {
  //           console.log("Option 1 Click");
  //         },
  //       }),
  //       new MenuItem({
  //         type: "separator",
  //       }),
  //       new MenuItem({
  //         label: "Option 2",
  //         click() {
  //           console.log("Option 2 Click");
  //         },
  //       }),
  //     ],
  //   })
  // );
});
