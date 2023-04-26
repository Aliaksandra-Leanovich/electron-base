import { app } from "electron";

app.on("will-finish-launching", () => {
  console.log("will finish launching");
});

app.on("ready", () => {
  console.log("ready");
});

app.whenReady().then(() => console.log("app is ready"));

app.on("before-quit", () => console.log("before quit"));
app.on("will-quit", () => console.log("will quit")); // порядок отображния за счет методов жизненных циклов
app.on("quit", () => console.log("quit"));

app.whenReady().then(() => {
  setTimeout(() => {
    app.quit();
  }, 2000);
});

//запрет на вызов второго экземпляра приложения
const lock = app.requestSingleInstanceLock();

if (!lock) {
  app.quit();
} else {
  app.on("second-instance", () => {
    console.log("second");
    if (win) {
      win.focus();
    }
  });
}

app.whenReady().then(() => {
  app.showAboutPanel();
});
