import { hashData } from "./hashData";
import { Report as ReportType } from "../types/report";

export const verifyClaims = (data: ReportType): string => {
  const repObj = JSON.parse(JSON.stringify(data));
  const { hash, ...report } = repObj;
  const currentHash = hashData(JSON.stringify(report));
  if (hash !== currentHash) {
    throw new Error("Claims not verified");
  }
  return hash;
};
