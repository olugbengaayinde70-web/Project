export function formatMoney(n) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(n);
}

export function parsePriceToNgn(price) {
  if (typeof price === "number") return price;
  const digits = String(price).replace(/[^0-9]/g, "");
  const num = Number(digits);
  return Number.isFinite(num) ? num : 0;
}

