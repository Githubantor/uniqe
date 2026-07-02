import mongoose, { Schema, Document } from "mongoose";

export interface IMember extends Document {
  name: string;
  photo: string;
  quote: string;
  joinYear: number;
  role?: string;
  isActive: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const MemberSchema = new Schema<IMember>(
  {
    name: { type: String, required: true },
    photo: { type: String },
    quote: { type: String, required: true },
    joinYear: { type: Number, required: true },
    role: { type: String },
    isActive: { type: Boolean, default: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const MemberModel =
  mongoose.models.Member ??
  mongoose.model<IMember>("Member", MemberSchema);
