(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxJson2base64 = require('../src/next-json2base64');

  describe('NxJson2base64.methods', function() {
    test('test stringify:', function() {
      var obj = {
        name: 'afei',
        age: 108
      };
      var res = 'eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==';
      expect(res).toBe(NxJson2base64.encode(obj));
    });

    test('test parse:', function() {
      var obj = {
        name: 'afei',
        age: 108
      };
      var res = 'eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==';
      expect(obj).toEqual(NxJson2base64.decode(res));
    });

    test('test str Chinese:', function() {
      var obj = {
        name: '一个中文文件名'
      };
      var res = 'eyJuYW1lIjoi5LiA5Liq5Lit5paH5paH5Lu25ZCNIn0=';
      expect(obj).toEqual(NxJson2base64.decode(res));
    });
  });

})();
