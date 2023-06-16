const urlDecode = function (text) {
  let object = {};
  text = text.split("&");
  for (properties of text) {
    properties = properties.split("=");
    object[properties[0]] = properties[1].replaceAll("%20", " ");
  }
  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
