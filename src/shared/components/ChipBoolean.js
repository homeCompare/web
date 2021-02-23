import {memo} from 'react';
import styled from 'styled-components';

import CheckedIcon from '@material-ui/icons/Done';
import CrossIcon from '@material-ui/icons/Close';

const HomeAttribute = styled.div`
	text-align: center;
`;
const Label = styled.label`
	display: flex;
	flex: 1;
	justify-content: center;
`;

const ChipBoolean = ({className, label, value}) => {
	return (
		<HomeAttribute className={className}>
			{value ? <CheckedIcon /> : <CrossIcon />}
			<Label>{label}</Label>
		</HomeAttribute>
	);
}

export default memo(ChipBoolean);