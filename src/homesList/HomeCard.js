import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useRouter} from 'next/router';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
import EditIcon from '@material-ui/icons/Edit';

import { Link } from '@/shared/utils/router';
import { IconButton } from '@/shared/components/Button';
import { usePriceWithCurrency } from '@/shared/utils/general';

// fixing warning of having isExpanded is the dom...
const ExpandMoreIconWithoutExtraProps = ({ isExpanded, ...rest }) => <ExpandMoreIcon {...rest} />;
ExpandMoreIconWithoutExtraProps.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

const StyledExpandMoreIcon = styled(ExpandMoreIconWithoutExtraProps)`
  ${({ isExpanded }) => isExpanded && `
    transform: rotate(180deg);
  `}
`;

const StyledBrokenImageIcon = styled(BrokenImageIcon)`
  &&& {
    margin: 0 auto;
    display: flex;
    height: 200px;
    width: 200px;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  width: 100%;
  height: 250px;
`;

const SmallImageBox = styled.img`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledIconButton = styled(IconButton)`
  z-index: 10;
`;

const StyledCard = styled(Card)`
 z-index: 1;

`;

const HomeCard = ({
  id, city, street, blockNumber, houseNumber, images, onRemoveHome,
}) => {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  const onRemoveHomeClick = () => {
    onRemoveHome(id);
  };

  const cardTitle = `${[city, street].join(', ')} ${houseNumber}`;
  const priceWithCurrency = usePriceWithCurrency(100000);

  return (
    <StyledCard>
      <CardHeader
        title={cardTitle}
        action={(
          <>
            <StyledIconButton onClick={() => router.push(`/edit/${id}`)}>
              <EditIcon />
            </StyledIconButton>
            <StyledIconButton onClick={onRemoveHomeClick}>
              <CloseIcon />
            </StyledIconButton>
          </>
        )}
        subheader={priceWithCurrency}
      />
      <StyledLink href={`/home/${id}`}>
        {images ? (
          <StyledCardMedia
            image={images[0]}
            title="Contemplative Reptile"
          />
        ) : <StyledBrokenImageIcon />}
      </StyledLink>
      <CardContent>
        extra content will go here.
      </CardContent>
      <CardActions disableSpacing>
        <StyledIconButton onClick={() => setExpanded(!expanded)}>
          <StyledExpandMoreIcon isExpanded={expanded} />
        </StyledIconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          blockNumber: {blockNumber} <br />
          {images && images.map((image, index) => <SmallImageBox key={index} src={image} alt="home" />)}
        </CardContent>
      </Collapse>

    </StyledCard>
  );
};

HomeCard.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  blockNumber: PropTypes.string,
  houseNumber: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  onRemoveHome: PropTypes.func.isRequired,
};

export default memo(HomeCard);
