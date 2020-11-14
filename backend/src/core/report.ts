import { insertReport } from "../db/handlers/report";
import { connectNode, sendHash } from "../services/ethereum";
import { Report as ReportType } from "../types/report";
import { User } from "../types/user";
import { hashData } from "../utils/hashData";
import { findUser } from "./user";

export const createReport = async (report: ReportType) => {
  // hash the report
  const reportHash = hashData(JSON.stringify(report).toString());
  report.hash = reportHash;

  // find user
  const user: User = await findUser(report.email);
  console.log(user);

  // send the hash to blockchain
  const { web3, contract } = await connectNode();
  const res = await sendHash(reportHash, web3, contract, user.accountId);

  // store report in db
  const response = await insertReport(report);
  if (!response) {
    return;
  }

  return reportHash;
};
