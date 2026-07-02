import mongoose, { Schema, Document } from "mongoose";

export interface IMembership extends Document {
  name: string;
  slug: string;
  price: string;
  pricePer: string;
  description: string;
  features: string[];
  image: string;
  highlighted: boolean;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const MembershipSchema = new Schema<IMembership>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    pricePer: { type: String, default: "/wk" },
    description: { type: String },
    features: [{ type: String }],
    image: { type: String },
    highlighted: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Membership =
  mongoose.models.Membership ??
  mongoose.model<IMembership>("Membership", MembershipSchema);
