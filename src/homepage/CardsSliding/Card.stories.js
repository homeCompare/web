import React, {useState} from 'react';

import styled from 'styled-components';
import {times} from 'lodash';
import action from '@storybook/addon-actions';

import Button from '@/shared/components/Button';

import Card from './Card';
import CardsSliding, {CardsWrapper} from './CardsSliding';

export default {
  title: 'Cards Sliding',
  component: CardsSliding,
  subcomponents: { Card },
};

const AddCardButton = styled(Button)`
  && {
    margin-top: 50px;
  }
`;

const getRandtomTill255 = () => Math.random() * 255;

const StyledCard = styled(Card)`
  && {
    ${({background}) => background && `background: ${background};`}
  }
`;

const SingleTemplate = args => <CardsWrapper><Card {...args} /></CardsWrapper>;
const MultiTemplate = () => {
  const [cards, setCards] = useState([{
    title: 'First card',
    total: 2,
    description: 'some content',
    onClick: action('click'),
  }, {
    title: '2nd card',
    total: 2,
    description: 'some content some content some content some content',
    onClick: action('click'),
  }]);

  const addCard = () => {
    const newCardsLength = cards.length + 1;
    setCards([
      ...cards.map(card => ({...card, total: newCardsLength})),
      {title: `random title ${newCardsLength}`, total: newCardsLength, description: `auto added card number ${newCardsLength}`, onClick: action('click')},
    ]);
  };

  return (
    <>
      <CardsSliding data={cards} />
      <AddCardButton onClick={addCard}>Add Card</AddCardButton>
    </>
  );
};

const NUMBER_OF_CARDS = 5;
const StyledCardsTemplate = () => {
  return (
    <CardsWrapper>
      {times(NUMBER_OF_CARDS, (i) => (
        <StyledCard
          key={i}
          total={NUMBER_OF_CARDS}
          title="title"
          description="description"
          onClick={action('click')}
          background={`radial-gradient(at top left, rgb(${getRandtomTill255()},${getRandtomTill255()},${getRandtomTill255()}), rgb(${getRandtomTill255()},${getRandtomTill255()},${getRandtomTill255()}))`}
        />
      ))}
    </CardsWrapper>
  );
};

export const SingleCard = SingleTemplate.bind({});
SingleCard.args = {
  title: 'Card title5',
  description: 'Card description',
  onClick: action('click'),
  total: 1,
};

export const InfinityCards = MultiTemplate.bind({});

export const WithStyledCards = StyledCardsTemplate.bind({});
