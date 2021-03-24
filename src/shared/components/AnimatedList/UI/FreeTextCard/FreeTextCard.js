import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const StyledCard = styled(Card)`
&& {
  max-width: 90%;
  max-height: 100%;
  margin-left: 5%;
  border-radius: 12.5px;
  height: 300px;
}
  
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 300px;
`;

const FreeTextCard = ({image, text}) => {
  return (
    <StyledCard>
      <CardActionArea style={{backgroundColor: '#444'}}>
        <CardWrapper>
          <CardMedia
            style={{width: '250px'}}
            component="img"
            alt="Contemplative Reptile"
            width="250"
            height="300"
            image={image}
            title="Contemplative Reptile"
          />

          <CardContent style={{color: 'white'}}>
            <Typography gutterBottom variant="h5" component="h2">
              Description
            </Typography>
            <Typography variant="body2" color="white" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardWrapper>
      </CardActionArea>
    </StyledCard>
  );
};

FreeTextCard.propTypes = {
  image: PropTypes.any,
  text: PropTypes.string,
};

export default FreeTextCard;
