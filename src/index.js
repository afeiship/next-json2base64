(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var base64 = global.Base64 || require('js-base64').Base64;

  var NxJson2base64 = nx.declare('nx.Json2base64', {
    statics: {
      base64: base64,
      encode: function (inObject) {
        var str = JSON.stringify(inObject);
        return base64.encode(str);
      },
      decode: function (inString) {
        var jsonStr = base64.decode(inString);
        return JSON.parse(jsonStr);
      },
      encodeURI: function (inObject) {
        var str = this.encode(inObject);
        return encodeURIComponent(str);
      },
      decodeURI: function (inString) {
        var str = decodeURIComponent(inString);
        return this.decode(str);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxJson2base64;
  }
})();
