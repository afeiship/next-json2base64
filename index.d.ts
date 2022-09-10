interface Json2base64 {
  encode(obj: any): string;
  encodeURI(obj: any): string;
  decode(target: string): any;
  decodeURI(target: string): any;
}

interface NxStatic {
  Json2base64: Json2base64
}
