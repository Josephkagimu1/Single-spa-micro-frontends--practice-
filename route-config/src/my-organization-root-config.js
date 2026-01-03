import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/shell",
  app: () => System.import("@org/shell"),
  activeWhen: () => true
});

registerApplication({
  name: "@org/home",
  app: () => System.import("@org/home"),
  activeWhen: () => true
});

start();
