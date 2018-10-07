import screenshotit from "../../src/";

setTimeout(() => {
  screenshotit({ url: "http://localhost:8080/screenshot" }).then(function(imageBlob) {
    var objectURL = URL.createObjectURL(imageBlob);
    var img = document.createElement("IMG");
    img.setAttribute("src", objectURL);
    document.body.appendChild(img)
  });
}, 3000);
