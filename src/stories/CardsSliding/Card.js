import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardRoot = styled.li`
	padding: 0;
	margin: 0;
	width: calc(100% / ${({total}) => total});
	height: 80%;
	background-color: #fff;
	box-shadow: 0 0 20px rgba(0,0,0,0.07);
	overflow: hidden;
	padding: 10px;
	align-items: center;
	&:hover {
		width: 105%;
		height: 100%;
		justify-content: center;
		text-align: center;
	}
`;

const Icon = styled.img`
	width: 50%;
	height: 50%;
	text-align: center;
`;

const Title = styled.h3`
	font-size: 30px;
`;

const Description = styled.p`
	margin: 0;
	padding: 0;
	text-align: left;
	margin-top: 15px;
`;

const Card = ({title, iconUrl, description, onClick, total}) => (
  <CardRoot onClick={onClick} total={total}>
    <Title>{title}</Title>
    {iconUrl && (
      <Icon
        src={iconUrl}
        alt={title}
      />
    )}
    {description && (<Description>{description}</Description>)}
  </CardRoot>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  icon: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
	onClick: () => null,
	total: 1,
};

export default memo(Card);
