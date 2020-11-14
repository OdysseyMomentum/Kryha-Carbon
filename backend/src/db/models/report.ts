import mongoose, { Schema, Document } from "mongoose";
import type { Report as ReportType } from "../../types/report";

export const reportSchema = new Schema<ReportType>(
  {
    email: {
      type: String,
      required: true
    },
    emissions: {
      type: Number,
      required: true
    },
    year: {
      type: Number,
      required: true
    },
    hash: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);

const Report = mongoose.model<ReportType & Document>("Report", reportSchema);

export { Report };
