import jsSHA from "jssha";

export const hashData = (data: string): string => {
  const shaObj: jsSHA = new jsSHA("SHA-512", "TEXT", { encoding: "UTF8" });
  const hash: string = "0x" + shaObj.getHash("HEX");
  console.log(shaObj);
  return hash;
};
