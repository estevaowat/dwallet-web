import Defaults from '../config/defaults';

type CurrencyFormatterOptions = {
   locale?: string;
   currency?: string;
};

const formatNumberToCurrency = (
   value: number,
   { locale, currency }: CurrencyFormatterOptions = Defaults.currency,
) => {
   const currencyFormatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
   });

   return currencyFormatter.format(value);
};

export default formatNumberToCurrency;
