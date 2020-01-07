(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var base64 = global.Base64 || require('js-base64').Base64;

  var NxJson2base64 = nx.declare('nx.Json2base64', {
    statics: {
      decode: function(inString) {
        var jsonStr = base64.decode(inString);
        return JSON.parse(jsonStr);
      },
      encode: function(inObject) {
        var str = JSON.stringify(inObject);
        return base64.encode(str);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxJson2base64;
  }
})();
