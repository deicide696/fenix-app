import currency from "currency.js"

export const COP = (value: currency.Any) =>
  currency(value, { symbol: "$", precision: 0, separator: "." })
