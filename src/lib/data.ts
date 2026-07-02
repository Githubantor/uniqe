import { cacheTag } from "next/cache";
import { cacheLife } from "next/cache";
import { connectToDatabase } from "@/lib/db";
import { Membership } from "@/lib/models/Membership";
import { MemberModel } from "@/lib/models/Member";
import { FAQ } from "@/lib/models/FAQ";
import { SiteContent } from "@/lib/models/SiteContent";
import { Contact } from "@/lib/models/Contact";

export interface MembershipPlan {
  _id: string;
  name: string;
  slug: string;
  price: string;
  pricePer: string;
  description: string;
  features: string[];
  image: string;
  highlighted: boolean;
  order: number;
}

export interface MemberData {
  _id: string;
  name: string;
  photo: string;
  quote: string;
  joinYear: number;
  role?: string;
  initials: string;
}

export interface FAQData {
  _id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface SiteContentData {
  key: string;
  value: string;
  type: string;
  page: string;
}

export interface AdminStats {
  contacts: number;
  memberships: number;
  members: number;
  faqs: number;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export async function getMemberships(): Promise<MembershipPlan[]> {
  "use cache";
  cacheTag("memberships");
  cacheLife("hours");

  const db = await connectToDatabase();
  if (!db) return [];

  const docs = await Membership.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

  return docs.map((d) => ({
    _id: d._id.toString(),
    name: d.name,
    slug: d.slug,
    price: d.price,
    pricePer: d.pricePer,
    description: d.description,
    features: d.features,
    image: d.image,
    highlighted: d.highlighted,
    order: d.order,
  }));
}

export async function getMembers(): Promise<MemberData[]> {
  "use cache";
  cacheTag("members");
  cacheLife("hours");

  const db = await connectToDatabase();
  if (!db) return [];

  const docs = await MemberModel.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

  return docs.map((d) => ({
    _id: d._id.toString(),
    name: d.name,
    photo: d.photo,
    quote: d.quote,
    joinYear: d.joinYear,
    role: d.role,
    initials: getInitials(d.name),
  }));
}

export async function getFAQs(): Promise<FAQData[]> {
  "use cache";
  cacheTag("faqs");
  cacheLife("hours");

  const db = await connectToDatabase();
  if (!db) return [];

  const docs = await FAQ.find({ isActive: true })
    .sort({ order: 1 })
    .lean();

  return docs.map((d) => ({
    _id: d._id.toString(),
    question: d.question,
    answer: d.answer,
    category: d.category,
    order: d.order,
  }));
}

export async function getSiteContent(page?: string): Promise<SiteContentData[]> {
  "use cache";
  cacheTag("site-content");
  cacheLife("hours");

  const db = await connectToDatabase();
  if (!db) return [];

  const filter: Record<string, unknown> = {};
  if (page) filter.page = page;

  const docs = await SiteContent.find(filter).lean();

  return docs.map((d) => ({
    key: d.key,
    value: d.value,
    type: d.type,
    page: d.page,
  }));
}

export async function getAdminStats(): Promise<AdminStats> {
  "use cache";
  cacheTag("admin-stats");
  cacheLife("minutes");

  const db = await connectToDatabase();
  if (!db) return { contacts: 0, memberships: 0, members: 0, faqs: 0 };

  const [contacts, memberships, members, faqs] = await Promise.all([
    Contact.countDocuments(),
    Membership.countDocuments(),
    MemberModel.countDocuments(),
    FAQ.countDocuments(),
  ]);

  return { contacts, memberships, members, faqs };
}
