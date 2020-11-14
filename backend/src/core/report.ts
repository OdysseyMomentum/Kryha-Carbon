import { insertReport } from "../db/handlers/report";
import { Report as ReportType } from "../types/report";
import { hashData } from "../utils/hashData";

export const createReport = async (report: ReportType) => {
  // hash the report
  const reportHash = hashData(JSON.stringify(report).toString());
  report.hash = reportHash;

  // send the hash to blockchain

  // store report in db
  const response = await insertReport(report);
  if (!response) {
    return;
  }

  return reportHash;
};
