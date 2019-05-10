(function() {
  var nx = require('next-js-core2');
  var NxJson2base64 = require('../src/next-json2base64');

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
  });
})();
