/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import { useSelector } from 'react-redux';

export const usePriceWithCurrency = price => {
  const currency = useSelector(state => state.currency);
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
