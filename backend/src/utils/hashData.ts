import jsSHA from "jssha";

export const hashData = (data: string): string => {
  const shaObj: jsSHA = new jsSHA("SHA-256", "ARRAYBUFFER");
  shaObj.update(data);
  const hash: string = "0x" + shaObj.getHash("HEX");
  return hash;
};
