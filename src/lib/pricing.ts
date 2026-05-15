export type CreditTier = {
  credits: number;
  price: number;
  costPerCredit: string;
  tier: string;
  popular?: boolean;
};

export const trexPricing: CreditTier[] = [
  { credits: 120, price: 290, costPerCredit: "$2.42", tier: "Starter" },
  { credits: 480, price: 980, costPerCredit: "$2.04", tier: "Reseller", popular: true },
  { credits: 1200, price: 2350, costPerCredit: "$1.96", tier: "Standard" },
  { credits: 2400, price: 4500, costPerCredit: "$1.88", tier: "Premium" },
  { credits: 6000, price: 10500, costPerCredit: "$1.75", tier: "High Volume" },
  { credits: 12000, price: 19900, costPerCredit: "$1.66", tier: "Enterprise" },
];

export const dinoPricing: CreditTier[] = [
  { credits: 120, price: 170, costPerCredit: "$1.42", tier: "Starter" },
  { credits: 480, price: 540, costPerCredit: "$1.13", tier: "Reseller", popular: true },
  { credits: 1200, price: 1190, costPerCredit: "$0.99", tier: "Standard" },
  { credits: 2400, price: 2100, costPerCredit: "$0.88", tier: "Premium" },
  { credits: 6000, price: 4900, costPerCredit: "$0.82", tier: "High Volume" },
  { credits: 12000, price: 9200, costPerCredit: "$0.77", tier: "Enterprise" },
];

export const strongPricing: CreditTier[] = [
  { credits: 120, price: 290, costPerCredit: "$2.42", tier: "Starter" },
  { credits: 480, price: 980, costPerCredit: "$2.04", tier: "Reseller", popular: true },
  { credits: 1200, price: 2350, costPerCredit: "$1.96", tier: "Standard" },
  { credits: 2400, price: 4500, costPerCredit: "$1.88", tier: "Premium" },
  { credits: 6000, price: 10500, costPerCredit: "$1.75", tier: "High Volume" },
  { credits: 12000, price: 19900, costPerCredit: "$1.66", tier: "Enterprise" },
];

export const megaPricing: CreditTier[] = [
  { credits: 120, price: 170, costPerCredit: "$1.42", tier: "Starter" },
  { credits: 480, price: 540, costPerCredit: "$1.13", tier: "Reseller", popular: true },
  { credits: 1200, price: 1190, costPerCredit: "$0.99", tier: "Standard" },
  { credits: 2400, price: 2100, costPerCredit: "$0.88", tier: "Premium" },
  { credits: 6000, price: 4900, costPerCredit: "$0.82", tier: "High Volume" },
  { credits: 12000, price: 9200, costPerCredit: "$0.77", tier: "Enterprise" },
];

export const magnumPricing: CreditTier[] = [
  { credits: 120, price: 187, costPerCredit: "$1.56", tier: "Starter" },
  { credits: 480, price: 594, costPerCredit: "$1.24", tier: "Reseller", popular: true },
  { credits: 1200, price: 1309, costPerCredit: "$1.09", tier: "Standard" },
  { credits: 2400, price: 2310, costPerCredit: "$0.96", tier: "Premium" },
  { credits: 6000, price: 5390, costPerCredit: "$0.90", tier: "High Volume" },
  { credits: 12000, price: 10120, costPerCredit: "$0.84", tier: "Enterprise" },
];
