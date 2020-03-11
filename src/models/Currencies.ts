// import { ExecFileSyncOptionsWithBufferEncoding } from "child_process";

export interface CurrencyInfo {
  isoCode: string;
  symbol: string;
  name: string;
}

export interface CurrencyInfoItems {
  [key: string]: CurrencyInfo;
}

export const CurrencyMetadata: CurrencyInfoItems = {
  GBP: { isoCode: "GBP", symbol: "£", name: "British Pound" },
  EUR: { isoCode: "EUR", symbol: "€", name: "Euro" },
  USD: { isoCode: "USD", symbol: "$", name: "US Dollar" },

  AUD: { isoCode: "AUD", symbol: "$", name: "Australian Dollar" },
  BGN: { isoCode: "BGN", symbol: "лв.", name: "Bulgarian Lev" },
  BRL: { isoCode: "BRL", symbol: "R$", name: "Brazilian Real" },
  CAD: { isoCode: "CAD", symbol: "$", name: "Canadian Dollar" },
  CHF: { isoCode: "CHF", symbol: "CHF", name: "Swiss Franc" },
  CNY: { isoCode: "CNY", symbol: "¥", name: "Chinese Yuan" },
  CZK: { isoCode: "CZK", symbol: "Kč", name: "Czech Koruna" },
  DKK: { isoCode: "DKK", symbol: "kr.", name: "Danish Krone" },
  HKD: { isoCode: "HKD", symbol: "$", name: "Hong Kong Dollar" },
  HRK: { isoCode: "HRK", symbol: "kn", name: "Croatian Kuna" },
  HUF: { isoCode: "HUF", symbol: "Ft", name: "Hungarian Forint" },
  IDR: { isoCode: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
  ILS: { isoCode: "ILS", symbol: "₪", name: "Israeli New Shekel" },
  INR: { isoCode: "INR", symbol: "₹", name: "Indian Rupee" },
  ISK: { isoCode: "ISK", symbol: "kr", name: "Icelandic Króna" },
  JPY: { isoCode: "JPY", symbol: "¥", name: "Japanese Yen" },
  KRW: { isoCode: "KRW", symbol: "₩", name: "South Korean Won" },
  MXN: { isoCode: "MXN", symbol: "$", name: "Mexican Peso" },

  MYR: { isoCode: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
  NOK: { isoCode: "NOK", symbol: "kr", name: "Norwegian Krone" },
  NZD: { isoCode: "NZD", symbol: "$", name: "New Zealand Dollar" },
  PHP: { isoCode: "PHP", symbol: "₱", name: "Philippine Piso" },
  PLN: { isoCode: "PLN", symbol: "zł", name: "Polish Zloty" },
  RON: { isoCode: "RON", symbol: "lei", name: "Romanian Leu" },

  RUB: { isoCode: "RUB", symbol: "₽", name: "Russian Ruble" },
  SEK: { isoCode: "SEK", symbol: "kr", name: "Swedish Krona" },
  SGD: { isoCode: "SGD", symbol: "$", name: "Singapore Dollar" },

  THB: { isoCode: "THB", symbol: "฿", name: "Thai Baht" },
  TRY: { isoCode: "TRY", symbol: "₺", name: "Turkish Lira" },

  ZAR: { isoCode: "ZAR", symbol: "R", name: "South African Rand" }
};
