(function () {
  const NxJson2base64 = require('../src');

  describe('NxJson2base64 basic api test', function () {
    test('test stringify:', function () {
      var obj = {
        name: 'afei',
        age: 108
      };
      var res = 'eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==';
      expect(res).toBe(NxJson2base64.encode(obj));
    });

    test('test parse:', function () {
      var obj = {
        name: 'afei',
        age: 108
      };
      var res = 'eyJuYW1lIjoiYWZlaSIsImFnZSI6MTA4fQ==';
      expect(obj).toEqual(NxJson2base64.decode(res));
    });

    test('test str Chinese:', function () {
      var obj = {
        name: '一个中文文件名'
      };
      var res = 'eyJuYW1lIjoi5LiA5Liq5Lit5paH5paH5Lu25ZCNIn0=';
      expect(obj).toEqual(NxJson2base64.decode(res));
    });

    test('url encode case:', () => {
      var data = {
        url: 'http://localhost:3000/signin',
        params: {
          id: 123,
          lang: 'zh_CN'
        }
      };

      expect(NxJson2base64.encode(data)).toBe(
        'eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbmluIiwicGFyYW1zIjp7ImlkIjoxMjMsImxhbmciOiJ6aF9DTiJ9fQ=='
      );
    });

    test('url decode case:', () => {
      var str =
        'eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAvc2lnbmluIiwicGFyYW1zIjp7ImlkIjoxMjMsImxhbmciOiJ6aF9DTiJ9fQ==';
      expect(NxJson2base64.decode(str)).toEqual({
        url: 'http://localhost:3000/signin',
        params: {
          id: 123,
          lang: 'zh_CN'
        }
      });
    });

    test('base64 should at NxJson2base64', () => {
      const b64 = NxJson2base64.base64;
      expect(b64).toBeDefined();
      expect(b64.encode('afei')).toBe('YWZlaQ==');
      expect(b64.decode('YWZlaQ==')).toBe('afei');
    });
  });
})();
