import mongoose, { Schema, Document } from "mongoose";

export interface IContact extends Document {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  membershipType?: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String, default: "General Inquiry" },
    message: { type: String, required: true },
    membershipType: { type: String },
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact ??
  mongoose.model<IContact>("Contact", ContactSchema);
