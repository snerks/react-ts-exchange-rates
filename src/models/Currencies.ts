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

  AED: { "name": "United Arab Emirates Dirham", "isoCode": "AED", symbol: "£" },
  AFN: { "name": "Afghan Afghani", "isoCode": "AFN", symbol: "£" },
  ALL: { "name": "Albanian Lek", "isoCode": "ALL", symbol: "£" },
  AMD: { "name": "Armenian Dram", "isoCode": "AMD", symbol: "£" },
  ANG: { "name": "Netherlands Antillean Guilder", "isoCode": "ANG", symbol: "£" },
  AOA: { "name": "Angolan Kwanza", "isoCode": "AOA", symbol: "£" },
  ARS: { "name": "Argentine Peso", "isoCode": "ARS", symbol: "£" },
  AUD: { "name": "Australian Dollar", "isoCode": "AUD", symbol: "£" },
  AWG: { "name": "Aruban Florin", "isoCode": "AWG", symbol: "£" },
  AZN: { "name": "Azerbaijani Manat", "isoCode": "AZN", symbol: "£" },
  BAM: {
    "name": "Bosnia-Herzegovina Convertible Mark",
    "isoCode": "BAM"
 , symbol: "£" },
  BBD: { "name": "Barbadian Dollar", "isoCode": "BBD", symbol: "£" },
  BDT: { "name": "Bangladeshi Taka", "isoCode": "BDT", symbol: "£" },
  BGN: { "name": "Bulgarian Lev", "isoCode": "BGN", symbol: "£" },
  BHD: { "name": "Bahraini Dinar", "isoCode": "BHD", symbol: "£" },
  BIF: { "name": "Burundian Franc", "isoCode": "BIF", symbol: "£" },
  BMD: { "name": "Bermudan Dollar", "isoCode": "BMD", symbol: "£" },
  BND: { "name": "Brunei Dollar", "isoCode": "BND", symbol: "£" },
  BOB: { "name": "Bolivian Boliviano", "isoCode": "BOB", symbol: "£" },
  BRL: { "name": "Brazilian Real", "isoCode": "BRL", symbol: "£" },
  BSD: { "name": "Bahamian Dollar", "isoCode": "BSD", symbol: "£" },
  BTC: { "name": "Bitcoin", "isoCode": "BTC", symbol: "£" },
  BTN: { "name": "Bhutanese Ngultrum", "isoCode": "BTN", symbol: "£" },
  BWP: { "name": "Botswanan Pula", "isoCode": "BWP", symbol: "£" },
  BYN: { "name": "Belarusian Ruble", "isoCode": "BYN", symbol: "£" },
  BZD: { "name": "Belize Dollar", "isoCode": "BZD", symbol: "£" },
  CAD: { "name": "Canadian Dollar", "isoCode": "CAD", symbol: "£" },
  CDF: { "name": "Congolese Franc", "isoCode": "CDF", symbol: "£" },
  CHF: { "name": "Swiss Franc", "isoCode": "CHF", symbol: "£" },
  CLF: { "name": "Chilean Unit of Account (UF)", "isoCode": "CLF", symbol: "£" },
  CLP: { "name": "Chilean Peso", "isoCode": "CLP", symbol: "£" },
  CNH: { "name": "Chinese Yuan (Offshore)", "isoCode": "CNH", symbol: "£" },
  CNY: { "name": "Chinese Yuan", "isoCode": "CNY", symbol: "£" },
  COP: { "name": "Colombian Peso", "isoCode": "COP", symbol: "£" },
  CRC: { "name": "Costa Rican Colón", "isoCode": "CRC", symbol: "£" },
  CUC: { "name": "Cuban Convertible Peso", "isoCode": "CUC", symbol: "£" },
  CUP: { "name": "Cuban Peso", "isoCode": "CUP", symbol: "£" },
  CVE: { "name": "Cape Verdean Escudo", "isoCode": "CVE", symbol: "£" },
  CZK: { "name": "Czech Republic Koruna", "isoCode": "CZK", symbol: "£" },
  DJF: { "name": "Djiboutian Franc", "isoCode": "DJF", symbol: "£" },
  DKK: { "name": "Danish Krone", "isoCode": "DKK", symbol: "£" },
  DOP: { "name": "Dominican Peso", "isoCode": "DOP", symbol: "£" },
  DZD: { "name": "Algerian Dinar", "isoCode": "DZD", symbol: "£" },
  EGP: { "name": "Egyptian Pound", "isoCode": "EGP", symbol: "£" },
  ERN: { "name": "Eritrean Nakfa", "isoCode": "ERN", symbol: "£" },
  ETB: { "name": "Ethiopian Birr", "isoCode": "ETB", symbol: "£" },
  // EUR: { "name": "Euro", "isoCode": "EUR", symbol: "£" },
  FJD: { "name": "Fijian Dollar", "isoCode": "FJD", symbol: "£" },
  FKP: { "name": "Falkland Islands Pound", "isoCode": "FKP", symbol: "£" },
  // GBP: { "name": "British Pound Sterling", "isoCode": "GBP", symbol: "£" },
  GEL: { "name": "Georgian Lari", "isoCode": "GEL", symbol: "£" },
  GGP: { "name": "Guernsey Pound", "isoCode": "GGP", symbol: "£" },
  GHS: { "name": "Ghanaian Cedi", "isoCode": "GHS", symbol: "£" },
  GIP: { "name": "Gibraltar Pound", "isoCode": "GIP", symbol: "£" },
  GMD: { "name": "Gambian Dalasi", "isoCode": "GMD", symbol: "£" },
  GNF: { "name": "Guinean Franc", "isoCode": "GNF", symbol: "£" },
  GTQ: { "name": "Guatemalan Quetzal", "isoCode": "GTQ", symbol: "£" },
  GYD: { "name": "Guyanaese Dollar", "isoCode": "GYD", symbol: "£" },
  HKD: { "name": "Hong Kong Dollar", "isoCode": "HKD", symbol: "£" },
  HNL: { "name": "Honduran Lempira", "isoCode": "HNL", symbol: "£" },
  HRK: { "name": "Croatian Kuna", "isoCode": "HRK", symbol: "£" },
  HTG: { "name": "Haitian Gourde", "isoCode": "HTG", symbol: "£" },
  HUF: { "name": "Hungarian Forint", "isoCode": "HUF", symbol: "£" },
  IDR: { "name": "Indonesian Rupiah", "isoCode": "IDR", symbol: "£" },
  ILS: { "name": "Israeli New Sheqel", "isoCode": "ILS", symbol: "£" },
  IMP: { "name": "Manx pound", "isoCode": "IMP", symbol: "£" },
  INR: { "name": "Indian Rupee", "isoCode": "INR", symbol: "£" },
  IQD: { "name": "Iraqi Dinar", "isoCode": "IQD", symbol: "£" },
  IRR: { "name": "Iranian Rial", "isoCode": "IRR", symbol: "£" },
  ISK: { "name": "Icelandic Króna", "isoCode": "ISK", symbol: "£" },
  JEP: { "name": "Jersey Pound", "isoCode": "JEP", symbol: "£" },
  JMD: { "name": "Jamaican Dollar", "isoCode": "JMD", symbol: "£" },
  JOD: { "name": "Jordanian Dinar", "isoCode": "JOD", symbol: "£" },
  JPY: { "name": "Japanese Yen", "isoCode": "JPY", symbol: "£" },
  KES: { "name": "Kenyan Shilling", "isoCode": "KES", symbol: "£" },
  KGS: { "name": "Kyrgystani Som", "isoCode": "KGS", symbol: "£" },
  KHR: { "name": "Cambodian Riel", "isoCode": "KHR", symbol: "£" },
  KMF: { "name": "Comorian Franc", "isoCode": "KMF", symbol: "£" },
  KPW: { "name": "North Korean Won", "isoCode": "KPW", symbol: "£" },
  KRW: { "name": "South Korean Won", "isoCode": "KRW", symbol: "£" },
  KWD: { "name": "Kuwaiti Dinar", "isoCode": "KWD", symbol: "£" },
  KYD: { "name": "Cayman Islands Dollar", "isoCode": "KYD", symbol: "£" },
  KZT: { "name": "Kazakhstani Tenge", "isoCode": "KZT", symbol: "£" },
  LAK: { "name": "Laotian Kip", "isoCode": "LAK", symbol: "£" },
  LBP: { "name": "Lebanese Pound", "isoCode": "LBP", symbol: "£" },
  LKR: { "name": "Sri Lankan Rupee", "isoCode": "LKR", symbol: "£" },
  LRD: { "name": "Liberian Dollar", "isoCode": "LRD", symbol: "£" },
  LSL: { "name": "Lesotho Loti", "isoCode": "LSL", symbol: "£" },
  LYD: { "name": "Libyan Dinar", "isoCode": "LYD", symbol: "£" },
  MAD: { "name": "Moroccan Dirham", "isoCode": "MAD", symbol: "£" },
  MDL: { "name": "Moldovan Leu", "isoCode": "MDL", symbol: "£" },
  MGA: { "name": "Malagasy Ariary", "isoCode": "MGA", symbol: "£" },
  MKD: { "name": "Macedonian Denar", "isoCode": "MKD", symbol: "£" },
  MMK: { "name": "Myanma Kyat", "isoCode": "MMK", symbol: "£" },
  MNT: { "name": "Mongolian Tugrik", "isoCode": "MNT", symbol: "£" },
  MOP: { "name": "Macanese Pataca", "isoCode": "MOP", symbol: "£" },
  MRO: { "name": "Mauritanian Ouguiya (pre-2018)", "isoCode": "MRO", symbol: "£" },
  MRU: { "name": "Mauritanian Ouguiya", "isoCode": "MRU", symbol: "£" },
  MUR: { "name": "Mauritian Rupee", "isoCode": "MUR", symbol: "£" },
  MVR: { "name": "Maldivian Rufiyaa", "isoCode": "MVR", symbol: "£" },
  MWK: { "name": "Malawian Kwacha", "isoCode": "MWK", symbol: "£" },
  MXN: { "name": "Mexican Peso", "isoCode": "MXN", symbol: "£" },
  MYR: { "name": "Malaysian Ringgit", "isoCode": "MYR", symbol: "£" },
  MZN: { "name": "Mozambican Metical", "isoCode": "MZN", symbol: "£" },
  NAD: { "name": "Namibian Dollar", "isoCode": "NAD", symbol: "£" },
  NGN: { "name": "Nigerian Naira", "isoCode": "NGN", symbol: "£" },
  NIO: { "name": "Nicaraguan Córdoba", "isoCode": "NIO", symbol: "£" },
  NOK: { "name": "Norwegian Krone", "isoCode": "NOK", symbol: "£" },
  NPR: { "name": "Nepalese Rupee", "isoCode": "NPR", symbol: "£" },
  NZD: { "name": "New Zealand Dollar", "isoCode": "NZD", symbol: "£" },
  OMR: { "name": "Omani Rial", "isoCode": "OMR", symbol: "£" },
  PAB: { "name": "Panamanian Balboa", "isoCode": "PAB", symbol: "£" },
  PEN: { "name": "Peruvian Nuevo Sol", "isoCode": "PEN", symbol: "£" },
  PGK: { "name": "Papua New Guinean Kina", "isoCode": "PGK", symbol: "£" },
  PHP: { "name": "Philippine Peso", "isoCode": "PHP", symbol: "£" },
  PKR: { "name": "Pakistani Rupee", "isoCode": "PKR", symbol: "£" },
  PLN: { "name": "Polish Zloty", "isoCode": "PLN", symbol: "£" },
  PYG: { "name": "Paraguayan Guarani", "isoCode": "PYG", symbol: "£" },
  QAR: { "name": "Qatari Rial", "isoCode": "QAR", symbol: "£" },
  RON: { "name": "Romanian Leu", "isoCode": "RON", symbol: "£" },
  RSD: { "name": "Serbian Dinar", "isoCode": "RSD", symbol: "£" },
  RUB: { "name": "Russian Ruble", "isoCode": "RUB", symbol: "£" },
  RWF: { "name": "Rwandan Franc", "isoCode": "RWF", symbol: "£" },
  SAR: { "name": "Saudi Riyal", "isoCode": "SAR", symbol: "£" },
  SBD: { "name": "Solomon Islands Dollar", "isoCode": "SBD", symbol: "£" },
  SCR: { "name": "Seychellois Rupee", "isoCode": "SCR", symbol: "£" },
  SDG: { "name": "Sudanese Pound", "isoCode": "SDG", symbol: "£" },
  SEK: { "name": "Swedish Krona", "isoCode": "SEK", symbol: "£" },
  SGD: { "name": "Singapore Dollar", "isoCode": "SGD", symbol: "£" },
  SHP: { "name": "Saint Helena Pound", "isoCode": "SHP", symbol: "£" },
  SLL: { "name": "Sierra Leonean Leone", "isoCode": "SLL", symbol: "£" },
  SOS: { "name": "Somali Shilling", "isoCode": "SOS", symbol: "£" },
  SRD: { "name": "Surinamese Dollar", "isoCode": "SRD", symbol: "£" },
  SSP: { "name": "South Sudanese Pound", "isoCode": "SSP", symbol: "£" },
  STD: {
    "name": "São Tomé and Príncipe Dobra (pre-2018)",
    "isoCode": "STD"
 , symbol: "£" },
  STN: { "name": "São Tomé and Príncipe Dobra", "isoCode": "STN", symbol: "£" },
  SVC: { "name": "Salvadoran Colón", "isoCode": "SVC", symbol: "£" },
  SYP: { "name": "Syrian Pound", "isoCode": "SYP", symbol: "£" },
  SZL: { "name": "Swazi Lilangeni", "isoCode": "SZL", symbol: "£" },
  THB: { "name": "Thai Baht", "isoCode": "THB", symbol: "£" },
  TJS: { "name": "Tajikistani Somoni", "isoCode": "TJS", symbol: "£" },
  TMT: { "name": "Turkmenistani Manat", "isoCode": "TMT", symbol: "£" },
  TND: { "name": "Tunisian Dinar", "isoCode": "TND", symbol: "£" },
  TOP: { "name": "Tongan Pa'anga", "isoCode": "TOP", symbol: "£" },
  TRY: { "name": "Turkish Lira", "isoCode": "TRY", symbol: "£" },
  TTD: { "name": "Trinidad and Tobago Dollar", "isoCode": "TTD", symbol: "£" },
  TWD: { "name": "New Taiwan Dollar", "isoCode": "TWD", symbol: "£" },
  TZS: { "name": "Tanzanian Shilling", "isoCode": "TZS", symbol: "£" },
  UAH: { "name": "Ukrainian Hryvnia", "isoCode": "UAH", symbol: "£" },
  UGX: { "name": "Ugandan Shilling", "isoCode": "UGX", symbol: "£" },
  // USD: { "name": "United States Dollar", "isoCode": "USD", symbol: "£" },
  UYU: { "name": "Uruguayan Peso", "isoCode": "UYU", symbol: "£" },
  UZS: { "name": "Uzbekistan Som", "isoCode": "UZS", symbol: "£" },
  VEF: { "name": "Venezuelan Bolívar Fuerte (Old)", "isoCode": "VEF", symbol: "£" },
  VES: { "name": "Venezuelan Bolívar Soberano", "isoCode": "VES", symbol: "£" },
  VND: { "name": "Vietnamese Dong", "isoCode": "VND", symbol: "£" },
  VUV: { "name": "Vanuatu Vatu", "isoCode": "VUV", symbol: "£" },
  WST: { "name": "Samoan Tala", "isoCode": "WST", symbol: "£" },
  XAF: { "name": "CFA Franc BEAC", "isoCode": "XAF", symbol: "£" },
  XAG: { "name": "Silver Ounce", "isoCode": "XAG", symbol: "£" },
  XAU: { "name": "Gold Ounce", "isoCode": "XAU", symbol: "£" },
  XCD: { "name": "East Caribbean Dollar", "isoCode": "XCD", symbol: "£" },
  XDR: { "name": "Special Drawing Rights", "isoCode": "XDR", symbol: "£" },
  XOF: { "name": "CFA Franc BCEAO", "isoCode": "XOF", symbol: "£" },
  XPD: { "name": "Palladium Ounce", "isoCode": "XPD", symbol: "£" },
  XPF: { "name": "CFP Franc", "isoCode": "XPF", symbol: "£" },
  XPT: { "name": "Platinum Ounce", "isoCode": "XPT", symbol: "£" },
  YER: { "name": "Yemeni Rial", "isoCode": "YER", symbol: "£" },
  ZAR: { "name": "South African Rand", "isoCode": "ZAR", symbol: "£" },
  ZMW: { "name": "Zambian Kwacha", "isoCode": "ZMW", symbol: "£" },
  ZWL: { "name": "Zimbabwean Dollar", "isoCode": "ZWL", symbol: "£" }

  // AUD: { isoCode: "AUD", symbol: "$", name: "Australian Dollar", symbol: "£" },
  // BGN: { isoCode: "BGN", symbol: "лв.", name: "Bulgarian Lev", symbol: "£" },
  // BRL: { isoCode: "BRL", symbol: "R$", name: "Brazilian Real", symbol: "£" },
  // CAD: { isoCode: "CAD", symbol: "$", name: "Canadian Dollar", symbol: "£" },
  // CHF: { isoCode: "CHF", symbol: "CHF", name: "Swiss Franc", symbol: "£" },
  // CNY: { isoCode: "CNY", symbol: "¥", name: "Chinese Yuan", symbol: "£" },
  // CZK: { isoCode: "CZK", symbol: "Kč", name: "Czech Koruna", symbol: "£" },
  // DKK: { isoCode: "DKK", symbol: "kr.", name: "Danish Krone", symbol: "£" },
  // HKD: { isoCode: "HKD", symbol: "$", name: "Hong Kong Dollar", symbol: "£" },
  // HRK: { isoCode: "HRK", symbol: "kn", name: "Croatian Kuna", symbol: "£" },
  // HUF: { isoCode: "HUF", symbol: "Ft", name: "Hungarian Forint", symbol: "£" },
  // IDR: { isoCode: "IDR", symbol: "Rp", name: "Indonesian Rupiah", symbol: "£" },
  // ILS: { isoCode: "ILS", symbol: "₪", name: "Israeli New Shekel", symbol: "£" },
  // INR: { isoCode: "INR", symbol: "₹", name: "Indian Rupee", symbol: "£" },
  // ISK: { isoCode: "ISK", symbol: "kr", name: "Icelandic Króna", symbol: "£" },
  // JPY: { isoCode: "JPY", symbol: "¥", name: "Japanese Yen", symbol: "£" },
  // KRW: { isoCode: "KRW", symbol: "₩", name: "South Korean Won", symbol: "£" },
  // MXN: { isoCode: "MXN", symbol: "$", name: "Mexican Peso", symbol: "£" },

  // MYR: { isoCode: "MYR", symbol: "RM", name: "Malaysian Ringgit", symbol: "£" },
  // NOK: { isoCode: "NOK", symbol: "kr", name: "Norwegian Krone", symbol: "£" },
  // NZD: { isoCode: "NZD", symbol: "$", name: "New Zealand Dollar", symbol: "£" },
  // PHP: { isoCode: "PHP", symbol: "₱", name: "Philippine Piso", symbol: "£" },
  // PLN: { isoCode: "PLN", symbol: "zł", name: "Polish Zloty", symbol: "£" },
  // RON: { isoCode: "RON", symbol: "lei", name: "Romanian Leu", symbol: "£" },

  // RUB: { isoCode: "RUB", symbol: "₽", name: "Russian Ruble", symbol: "£" },
  // SEK: { isoCode: "SEK", symbol: "kr", name: "Swedish Krona", symbol: "£" },
  // SGD: { isoCode: "SGD", symbol: "$", name: "Singapore Dollar", symbol: "£" },

  // THB: { isoCode: "THB", symbol: "฿", name: "Thai Baht", symbol: "£" },
  // TRY: { isoCode: "TRY", symbol: "₺", name: "Turkish Lira", symbol: "£" },

  // ZAR: { isoCode: "ZAR", symbol: "R", name: "South African Rand", symbol: "£" }
};
