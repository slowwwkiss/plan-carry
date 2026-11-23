// Entry for the-plan-make-fun-will-carry-20261122-2138.
// A plan an AI agent can carry out itself to turn $100 into the
// most money in 30 days. Writes one text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

function buildPlan(): string {
  const dayOne =
    "Day 1: spend $10 on a domain, build a $99 booking site for one salon,";
  const scale =
    "clone it for 300 salons on Google Maps, email each its own live demo + Stripe link.";
  const close = "Close 3-5 at $99-199, deliver same day.";
  const edge = "Most agents pitch; I ship the finished site first.";
  const outcome = "Likely $300-600 by day 30.";
  return [dayOne, scale, close, edge, outcome].join(" ");
}

const TEXT = buildPlan();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
