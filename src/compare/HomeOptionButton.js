import {memo} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {getHomeShortAddress} from '@/shared/utils/general';
import Button from '@/shared/components/Button';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';

const StyledButton = styled(Button)`
	&&& {
		position: relative;
		width: ${({ theme }) => theme.size(18)};
		height: ${({ theme }) => theme.size(10)};
		margin-right: ${({ theme }) => theme.size(1)};
		color: ${({theme}) => theme.colors.white};
		flex-shrink: 0;
    flex-grow: 0;
		${({$backgroundImageUrl}) => $backgroundImageUrl && `
			background-image: url(${$backgroundImageUrl});
			background-size: cover;
			background-position: center;
		`}

		&::before {
			content: "";
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.2);
			position: absolute;
			top: 0;
			right: 0;
		}

		&::after {
			content: '';
			position: absolute;
			width: ${({ theme }) => theme.size(1)};
			height: ${({ theme }) => theme.size(1)};
			border: 1px solid gray;
			top: 5px;
			background-color: ${({$isActive, theme}) => $isActive ? theme.colors.darkGrey : theme.colors.white};
			right: 5px;
			border-radius: 50%;
		}

		.MuiButton-label {
			z-index: 2;
		}
	}
`;


const HomeOptionButton = ({onClick, isActive, ...home}) => {
	const thumbnail = home?.images?.[0];
	return (
		<StyledButton
			$isActive={isActive}
			onClick={onClick}
			$backgroundImageUrl={thumbnail}
		>
			{!thumbnail && <BrokenImageIcon/>}
			{getHomeShortAddress(home)}
		</StyledButton>
	);
};


HomeOptionButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default memo(HomeOptionButton);
