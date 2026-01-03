import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/navbar",
  app: () => System.import("@org/navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@org/patient-app",
  app: () => System.import("@org/patient-app"),
  activeWhen: ["/patient"],
});

start({
  urlRerouteOnly: true,
});
