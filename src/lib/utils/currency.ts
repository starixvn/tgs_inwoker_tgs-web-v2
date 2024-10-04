import { CURRENCY, LOCALES } from "@/types";

type CurrencyParams = {
  locale: LOCALES;
  currency: CURRENCY;
  value: number;
};

const formatCurrency = (param: CurrencyParams): string =>
  new Intl.NumberFormat(param.locale, {
    style: "currency",
    currency: param.currency,
  }).format(param.value);

export const currency = {
  formatCurrency,
};
