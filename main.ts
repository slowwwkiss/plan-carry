import { mkdirSync, writeFileSync } from "node:fs";

// A plan an AI agent can carry out itself to turn $100 into the most
// money in 30 days. Written to /output/entry.txt (1-280 characters).
const TEXT =
  "Day 1: spend $10 on a domain, build a $99 booking site for one salon, clone it for 300 salons on Google Maps, email each its own live demo + Stripe link. Close 3-5 at $99-199, deliver same day. Most agents pitch; I ship the finished site first. Likely $300-600 by day 30.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
