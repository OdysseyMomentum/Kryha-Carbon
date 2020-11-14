import { Report } from "../models/report";
import type { Report as ReportType } from "../../types/report";

export const insertReport = async (report: ReportType): Promise<ReportType> => {
  return new Report(report).save().catch((e) => {
    console.log(e);
    throw e;
  });
};

const _findOne = async (
  query: Record<string, unknown>
): Promise<ReportType> => {
  return Report.findOne(query).catch((e) => {
    console.log(e);
    throw e;
  });
};

export const findOneReportByEmail = async (email: string) => {
  return _findOne({ email }).catch((e) => {
    console.log(e);
    throw e;
  });
};

export const findOneByHash = async (
  hash: string,
  email: string
): Promise<ReportType> => {
  return _findOne({ hash, email });
};

export const findMany = async (
  query: Record<string, unknown>,
  limit: number
): Promise<ReportType[]> => {
  return Report.find(query)
    .limit(limit)
    .catch((e) => {
      console.log(e);
      throw e;
    });
};
