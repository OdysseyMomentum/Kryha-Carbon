import {
  findManyReports,
  findOneReportByEmail,
  insertReport
} from "../db/handlers/report";
import { connectNode, sendHash } from "../services/ethereum";
import { Report as ReportType } from "../types/report";
import { User } from "../types/user";
import { hashData } from "../utils/hashData";
import { verifyClaims } from "../utils/verifyClaims";
import { findUser } from "./user";

export const createReport = async (report: ReportType) => {
  // hash the report
  const reportHash = hashData(JSON.stringify(report).toString());
  report.hash = reportHash;
  console.log(report.hash);

  // find user
  const user: User = await findUser(report.email);

  // send the hash to blockchain
  const { web3, contract } = await connectNode();
  await sendHash(reportHash, web3, contract, user.accountId);

  // store report in db
  const response = await insertReport(report);
  if (!response) {
    return;
  }

  return reportHash;
};

export const verifyReport = async (
  email: string
): Promise<ReportType | Error> => {
  // Retrieve report
  const report: ReportType = await findOneReportByEmail(email);

  // verify claims
  try {
    verifyClaims(report);
  } catch (error) {
    return error;
  }

  return report;
};

export const retrieveAllReports = async (
  email: string
): Promise<ReportType[]> => {
  const reports = await findManyReports({ email }, 50);

  return reports;
};
