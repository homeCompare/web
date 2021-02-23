import React, {memo} from 'react';
import styled from 'styled-components';
import CompareIcon from '@material-ui/icons/Compare';
import EuroIcon from '@material-ui/icons/Euro';

const iconSize = 4;
const IconWrapper = styled.div`
	width: ${({theme}) => theme.size(iconSize)};
	height: ${({theme}) => theme.size(iconSize)};
	border-radius: 50%;
	background-color: ${({theme}) => theme.colors.darkGrey};
	align-items: center;
	display: flex;
	justify-content: center;
	color: #fff;
`;

const Icons = {
	CompareIcon,
	EuroIcon,
};

const CircleWithIcon = ({className, icon}) => {
	const Component = Icons[icon];
	return (
		<IconWrapper className={className}><Component /></IconWrapper>
	);
};

export default memo(CircleWithIcon);