import nx from '@jswork/next';
import { Base64 } from 'js-base64';

const NxJson2base64 = nx.declare('nx.Json2base64', {
  statics: {
    base64: Base64,
    encode: function (inObject) {
      var str = JSON.stringify(inObject);
      return Base64.encode(str);
    },
    decode: function (inString) {
      var jsonStr = Base64.decode(inString);
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

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxJson2base64;
}

export default NxJson2base64;
