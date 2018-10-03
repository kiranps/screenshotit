import screenshotlib from "../../src/";

setTimeout(() => {
  screenshotlib({ url: "http://localhost:8080/screenshot" });
}, 3000);
