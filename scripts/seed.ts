import { config } from "dotenv";
config({ path: ".env.local" });

import mongoose from "mongoose";
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const MONGODB_URI = process.env.MONGODB_URI || "";

const MembershipSchema = new mongoose.Schema({
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
}, { timestamps: true });

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  quote: { type: String, required: true },
  joinYear: { type: Number, required: true },
  role: { type: String },
  isActive: { type: Boolean, default: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const FAQSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, default: "general" },
  order: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const SiteContentSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true },
  type: { type: String, default: "text" },
  page: { type: String, default: "global" },
}, { timestamps: true });

SiteContentSchema.index({ key: 1, page: 1 }, { unique: true });

const Membership = mongoose.models.Membership || mongoose.model("Membership", MembershipSchema);
const MemberModel = mongoose.models.Member || mongoose.model("Member", MemberSchema);
const FAQ = mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
const SiteContent = mongoose.models.SiteContent || mongoose.model("SiteContent", SiteContentSchema);

async function seed() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to MongoDB");

  await Promise.all([
    Membership.deleteMany({}),
    MemberModel.deleteMany({}),
    FAQ.deleteMany({}),
    SiteContent.deleteMany({}),
  ]);
  console.log("Cleared existing data");

  await Membership.insertMany([
    {
      name: "Hot Desking",
      slug: "hot-desking",
      price: "$60",
      pricePer: "/wk",
      description: "For the free spirits who roam where WiFi leads.",
      features: [
        "Access to communal desks",
        "High-speed WiFi",
        "Coffee & tea included",
        "Printing & scanning",
        "Locker storage",
        "Community events",
      ],
      image: "/images/hot-desk.jpg",
      highlighted: false,
      order: 1,
      isActive: true,
    },
    {
      name: "Permanent Desk",
      slug: "permanent-desk",
      price: "$110",
      pricePer: "/wk",
      description: "Your name on a desk. Your plant on the shelf. Your vibe, always.",
      features: [
        "Dedicated desk",
        "Ergonomic chair",
        "24/7 access",
        "High-speed WiFi",
        "Coffee & tea included",
        "Meeting room credits",
        "Mail handling",
        "Storage drawer",
      ],
      image: "/images/permanent-desk.jpg",
      highlighted: true,
      order: 2,
      isActive: true,
    },
    {
      name: "Private Studio",
      slug: "private-studio",
      price: "Let's Talk",
      pricePer: "",
      description: "For teams, egos, and people who need a door to close.",
      features: [
        "Lockable private office",
        "Furnished space",
        "Custom layout",
        "24/7 access",
        "Meeting room access",
        "Dedicated WiFi",
        "Kitchen access",
        "Brandable entrance",
      ],
      image: "/images/private-studio.jpg",
      highlighted: false,
      order: 3,
      isActive: true,
    },
  ]);
  console.log("Seeded memberships");

  await MemberModel.insertMany([
    {
      name: "Sarah Chen",
      photo: "",
      quote: "I came for the WiFi, stayed for the impromptu dance breaks. Uniqe is less a coworking space and more a lifestyle choice I stand by.",
      joinYear: 2023,
      role: "Graphic Designer",
      isActive: true,
      order: 1,
    },
    {
      name: "Marcus Rivera",
      photo: "",
      quote: "My therapist says I need boundaries. Uniqe gives me a desk, good coffee, and people who laugh at my terrible jokes. Close enough.",
      joinYear: 2022,
      role: "Software Developer",
      isActive: true,
      order: 2,
    },
    {
      name: "Priya Patel",
      photo: "",
      quote: "I told my parents I work at an office. Technically true. Emotionally, I'm at summer camp with WiFi and adult responsibilities.",
      joinYear: 2024,
      role: "Content Strategist",
      isActive: true,
      order: 3,
    },
    {
      name: "Leo Thompson",
      photo: "",
      quote: "Three years in and I've written two books, launched a startup, and learned the names of every plant in here. Productivity is a side effect.",
      joinYear: 2021,
      role: "Author & Founder",
      isActive: true,
      order: 4,
    },
    {
      name: "Emma Watson-Lee",
      photo: "",
      quote: "The pool table is where I close 60% of my deals. The other 40% is at the coffee machine.",
      joinYear: 2023,
      role: "UX Designer",
      isActive: true,
      order: 5,
    },
    {
      name: "James O'Brien",
      photo: "",
      quote: "The natural light in here is absurd. I've shot entire campaigns without leaving the building.",
      joinYear: 2024,
      role: "Freelance Photographer",
      isActive: true,
      order: 6,
    },
    {
      name: "Aisha Mohammed",
      photo: "",
      quote: "I raised my seed round while playing ping pong. Coincidence? Probably. But I'm not taking chances.",
      joinYear: 2022,
      role: "Startup Founder",
      isActive: true,
      order: 7,
    },
    {
      name: "Carlos Mendez",
      photo: "",
      quote: "The space itself inspires me. Every corner has a design story. I feel at home here.",
      joinYear: 2023,
      role: "Architect",
      isActive: true,
      order: 8,
    },
  ]);
  console.log("Seeded members");

  await FAQ.insertMany([
    {
      question: "Can a pie be eaten in 4 bites and under 20 seconds?",
      answer: "We've seen it done. We don't condone it. But if you're brave enough, the kitchen is yours. Just clean up the evidence.",
      category: "general",
      order: 1,
      isActive: true,
    },
    {
      question: "Is there actually work happening here?",
      answer: "Allegedly. We've spotted people typing, sketching, and once, someone even had a spreadsheet open. But between the ping pong tournaments and impromptu jam sessions, the line gets blurry.",
      category: "general",
      order: 2,
      isActive: true,
    },
    {
      question: "What if I'm not a morning person?",
      answer: "Neither are we. That's why coffee is on tap 24/7, and no one will judge you for rolling in at 11am with bedhead. We call it 'creative preparation time.'",
      category: "general",
      order: 3,
      isActive: true,
    },
    {
      question: "Can I bring my dog?",
      answer: "Absolutely. We have a resident office dog named Waffle who runs HR (Happiness Relations). Just make sure your pup passes the vibe check.",
      category: "general",
      order: 4,
      isActive: true,
    },
    {
      question: "What's the WiFi password?",
      answer: "It's 'stopprocrastinating' — all lowercase, no spaces. We have a sense of humor, not a sense of irony.",
      category: "general",
      order: 5,
      isActive: true,
    },
    {
      question: "Do you have parking?",
      answer: "We do! 24/7 secure parking out back. There's also a bike rack for the eco-warriors and a bus stop 50m away for the public transport enthusiasts.",
      category: "general",
      order: 6,
      isActive: true,
    },
  ]);
  console.log("Seeded FAQs");

  await SiteContent.insertMany([
    { key: "site_title", value: "Uniqe | Coworking Space with Personality", type: "text", page: "global" },
    { key: "site_description", value: "Technically it's a coworking space. Emotionally it's a group art project. Join the most personality-driven workspace in town.", type: "text", page: "global" },
    { key: "hero_headline", value: "Your Dream\nOffice Awaits", type: "text", page: "home" },
    { key: "hero_subtitle", value: "Technically it's a coworking space. Emotionally it's a group art project. Come make your desk your happy place.", type: "text", page: "home" },
  ]);
  console.log("Seeded site content");

  console.log("Seed complete!");
  await mongoose.disconnect();
}

seed().catch(console.error);
