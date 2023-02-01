type Base64 = import('js-base64').Base64;

interface Json2base64 {
  base64: Base64;
  encode(obj: any): string;
  encodeURI(obj: any): string;
  decode(target: string): any;
  decodeURI(target: string): any;
}

interface NxStatic {
  Json2base64: Json2base64;
}
