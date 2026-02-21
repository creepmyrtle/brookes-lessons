export interface PricingPlan {
  name: string;
  detail: string;
  amount: string;
  per: string;
  breakdown: string;
  featured: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Pack",
    detail: "4 × 30 minute lessons",
    amount: "$140",
    per: "per month",
    breakdown: "$35 per lesson",
    featured: false,
  },
  {
    name: "Best Value",
    detail: "8 × 30 minute lessons",
    amount: "$240",
    per: "per month",
    breakdown: "$30 per lesson — save $40",
    featured: true,
  },
  {
    name: "Deep Dive",
    detail: "4 × 60 minute lessons",
    amount: "$260",
    per: "per month",
    breakdown: "$65 per hour",
    featured: false,
  },
];
