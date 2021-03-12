import React, {memo} from 'react';

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
	white-space: nowrap;
	
	&:hover {
		width: 105%;
		height: 100%;
		justify-content: center;

		& > h3 {
			width: 100%;
		}
	}
`;

const Icon = styled.img`
	width: 50%;
	height: 50%;
	text-align: center;
`;

const Title = styled.h3`
	text-align: center;
	font-size: 30px;
	width: 0;
	transition: width 0.5s ease-in-out;
`;

const Description = styled.p`
	margin: 0;
	padding: 0;
	text-align: left;
	margin-top: 15px;
`;

const Card = ({title, iconUrl, description, onClick, total, className}) => (
  <CardRoot onClick={onClick} total={total} className={className}>
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
  /**
   * Title will be presented at the top of the card.
	*/
  title: PropTypes.string.isRequired,
  /**
   * Number of cards to split them evenly.
	*/
  total: PropTypes.number.isRequired,
  /**
   * Url of icon.
	*/
  iconUrl: PropTypes.string,
  /**
   * Free description text
	*/
  description: PropTypes.string,
  /**
   * onClick event
	*/
  onClick: PropTypes.func,
  /**
   * string of styling class names (needed for styled-components)
	*/
  className: PropTypes.string,
};

export default memo(Card);
