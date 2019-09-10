/*!
 * name: next-json2base64
 * url: https://github.com/afeiship/next-json2base64
 * version: 1.0.0
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var base64 = global.Base64 || require('js-base64').Base64;

  var NxJson2base64 = nx.declare('nx.Json2base64', {
    statics: {
      parse: function(inString) {
        var jsonStr = base64.decode(inString);
        return JSON.parse(jsonStr);
      },
      stringify: function(inObject) {
        var str = JSON.stringify(inObject);
        return base64.encode(str);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxJson2base64;
  }
})();
