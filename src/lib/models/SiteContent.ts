import mongoose, { Schema, Document } from "mongoose";

export interface ISiteContent extends Document {
  key: string;
  value: string;
  type: "text" | "html" | "json";
  page: string;
  createdAt: Date;
  updatedAt: Date;
}

const SiteContentSchema = new Schema<ISiteContent>(
  {
    key: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, default: "text" },
    page: { type: String, default: "global" },
  },
  { timestamps: true }
);

SiteContentSchema.index({ key: 1, page: 1 }, { unique: true });

export const SiteContent =
  mongoose.models.SiteContent ??
  mongoose.model<ISiteContent>("SiteContent", SiteContentSchema);
