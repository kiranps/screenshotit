//taken from https://github.com/sorensen/absolutify/blob/master/absolutify.js

/**
 * Replace all relative urls in a given HTML string with absolute
 */

function replace(str, url) {
  if (typeof url === "function") return replace.iterate(str, url);
  return str.replace(replace.rx, "$1" + url + "/$4");
}

replace.rx = /((href|src|codebase|cite|background|cite|action|profile|formaction|icon|manifest|archive)=["'])(([.]+\/)|(?:\/)|(?=#))(?!\/)/g;

/**
 * Match the same as above, but capture the full URL for iteration
 */

replace.captureRx = /((href|src|codebase|cite|background|cite|action|profile|formaction|icon|manifest|archive)=["'])((([.]+\/)|(?:\/)|(?:#))(?!\/)[a-zA-Z0-9._-]+)/g;

/**
 * URL replacement using function iteration, this is handled slightly
 * different as the user will be supplied with the full attribute value
 * for replacement, and will be inserted back correctly
 */

replace.iterate = function(str, iterator) {
  return str.replace(replace.captureRx, function(full, prefix, prop, url) {
    return prefix + iterator(url, prop);
  });
};

export default replace;
