(function() {
  var nx = require('next-js-core2');
  var NxJson2base64 = require('../src/next-json2base64');
  var base64 = global.Base64 || require('js-base64').Base64;

  describe('NxJson2base64.methods', function() {
    test('test stringify:', function() {
      var obj = {
        name: 'afei',
        age: 108
      };
      var res = 'eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==';
      expect(res).toBe(NxJson2base64.stringify(obj));
    });

    test('test parse:', function() {
      var obj = {
        name: 'afei',
        age: 108
      };
      var res = 'eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==';
      expect(obj).toEqual(NxJson2base64.parse(res));
    });

    test('test str Chinese:', function() {
      var obj = {
        name: '一个中文文件名'
      };
      var res = 'eyJuYW1lIjoi5LiA5Liq5Lit5paH5paH5Lu25ZCNIn0=';
      expect(obj).toEqual(NxJson2base64.parse(res));
    });
  });
})();
