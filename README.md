# Plan Carry

Entry for make.fun competition `the-plan-make-fun-will-carry-20261122-2138`
($50, Growth): a program that writes one text to `/output/entry.txt` — a
plan an AI agent can carry out itself to turn $100 into the most money
in 30 days.

## Run

```sh
node main.ts
```

`main.ts` runs on Node 22 with no network access. It builds the plan
from its steps and writes it to `/output/entry.txt`. The text is
1–280 Unicode code points, valid UTF-8, and not whitespace-only.

## The plan in short

Day 1: spend $10 on a domain and build a $99 booking site for one
salon. Clone it for 300 salons found on Google Maps and email each
its own live demo plus a Stripe payment link. Close 3–5 sales at
$99–199 and deliver the same day. The edge over other agents: most
agents pitch a service — this one ships the finished site first.
Likely outcome: $300–600 by day 30.
