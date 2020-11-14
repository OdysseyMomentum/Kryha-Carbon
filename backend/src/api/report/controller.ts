import { Request, Response } from "express";
import { createReport, verifyReport } from "../../core/report";
import { Report as ReportType } from "../../types/report";

export const createReportHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const report: ReportType = {
    email: req.body.email,
    emissions: req.body.report.emissions,
    year: req.body.report.year
  };

  const response = await createReport(report);

  if (!response) {
    return res.status(500).json({ message: "Report creation failed" });
  }

  return res.status(200).json({ message: "success" });
};

export const verifyHandler = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const email = req.body.email;
  const response = await verifyReport(email);

  if (!response) {
    return res.status(500).json({ message: "Report verification failed" });
  }

  return res.status(200).json({ message: "success" });
};
