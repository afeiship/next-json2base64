import { Base64 } from "js-base64";

interface Json2base64 {
  base64: typeof Base64;
  encode(obj: any): string;
  encodeURI(obj: any): string;
  decode(target: string): any;
  decodeURI(target: string): any;
}

interface NxStatic {
  Json2base64: Json2base64
}
