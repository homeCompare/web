import React, { memo } from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types';

import Card from './Card';

export const CardsWrapper = styled.ul`
	width: 100%;
	height: 200px;
	list-style-type: none;
	display: flex;
	padding: 0;
	margin: 0;
	background: fff;

	& > li {
		transition: all 0.5s ease-in-out;
	}
`;

const CardsSliding = ({data}) => (
  <CardsWrapper>
    {data?.map(card => (
      <Card {...card} key={card.title} total={data.length} />
    ))}
  </CardsWrapper>
);

CardsSliding.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func,
  })).isRequired,
};

export default memo(CardsSliding);
