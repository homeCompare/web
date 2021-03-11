import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';
import styled from 'styled-components';

import Button from '../../shared/components/Button';

import Card from './Card';
import CardsSliding, {CardsWrapper} from './CardsSliding';

export default {
  title: 'CardsSliding',
  component: Card,
  subcomponents: { Card },
};

const AddCardButton = styled(Button)`
  && {
    margin-top: 50px;
  }
`;

const SingleTemplate = args => <CardsWrapper><Card {...args} /></CardsWrapper>;
const MultiTemplate = args => {
  const [cards, setCards] = useState([{
    title: 'First card',
    total: 2,
    description: 'some content',
    onClick: null,
  }, { 
    title: '2nd card',
    total: 2,
    description: 'some content some content some content some content',
    onClick: null,
  }]);

  const addCard = () => {
    const newCardsLength = cards.length + 1;
    setCards([
      ...cards.map(card => ({...card, total: newCardsLength})),
      {title: `random title ${newCardsLength}`, total: newCardsLength, description: `auto added card number ${newCardsLength}`, onClick: null}
    ]);
  }

  return (
    <>
      <CardsSliding data={cards} />
      <AddCardButton onClick={addCard}>Add Card</AddCardButton>
    </>
  );
};

export const SingleCard = SingleTemplate.bind({});
SingleCard.args = {
  title: 'Card title',
  description: 'Card description',
};

export const InfinityCards = MultiTemplate.bind({});
