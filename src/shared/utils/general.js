import {useSelector} from 'react-redux';

import {selectCurrency} from '@/state/selectors';

export const usePriceWithCurrency = price => {
  const currency = useSelector(selectCurrency);
  return Intl.NumberFormat(window.navigator.language, {
    currency,
    style: 'currency',
  }).format(price);
};

export const getPriceWithCurrency = price => {
  return Intl.NumberFormat(window.navigator.language, {
    currency: 'EUR',
    style: 'currency',
  }).format(price);
};

export const getHomeShortAddress = ({city, street, houseNumber}) => `${city}, ${street} ${houseNumber}`;
