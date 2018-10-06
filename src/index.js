import "whatwg-fetch";
import absolutify from "./absolutify";

const removeStyles = node => {
  const r = node.getElementsByTagName("link");
  for (var i = r.length - 1; i >= 0; i--) {
    r[i].parentNode.removeChild(r[i]);
  }
  return node;
};

const removeScripts = node => {
  const r = node.getElementsByTagName("script");
  for (var i = r.length - 1; i >= 0; i--) {
    r[i].parentNode.removeChild(r[i]);
  }
  return node;
};

const cloneDocument = () => {
  const documentClone = document.cloneNode(true);
  const styles = convertStyleSheetToCss(document);
  const newDocument = removeStyles(removeScripts(documentClone))
    .documentElement;
  appendToHead(newDocument, styleTag(styles));
  const origin = window.location.origin;
  const htmlString = absolutify(newDocument.innerHTML, origin);
  return htmlString;
};

const convertStyleSheetToCss = doc => {
  var docStyle = "";
  const styleSheetCount = doc.styleSheets.length;
  const styleSheets = doc.styleSheets;
  for (var i = 0; i < styleSheetCount; i++) {
    let cssRules = styleSheets[i].rules;
    let cssRulesLength = cssRules.length;
    for (var j = 0; j < cssRulesLength; j++) {
      docStyle += cssRules[j].cssText;
    }
  }
  return docStyle;
};

const styleTag = styles => {
  const css = document.createElement("style");
  css.type = "text/css";
  css.appendChild(document.createTextNode(styles));
  return css;
};

const appendToHead = (doc, node) => {
  console.log(doc);
  doc.getElementsByTagName("head")[0].appendChild(node);
};

const puppeterScreenshot = (url, data) =>
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "default",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.blob();
  });

const screenshotlib = params => {
  const { url } = params;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const documentHeight = document.body.scrollHeight;
  const documentWidth = document.body.scrollWidth;
  const height = windowHeight > documentHeight ? windowHeight : documentHeight;
  const width = documentWidth;
  const doc = cloneDocument();
  const data = {
    html: doc,
    height,
    width
  };

  return puppeterScreenshot(url, data);
};

export default screenshotlib;
