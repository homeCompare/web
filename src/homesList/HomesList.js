import React, {memo, useState} from 'react';

import styled from 'styled-components';
import {useSelector} from 'react-redux';
import _, {isEmpty} from 'lodash';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Button from '@/shared/components/Button';
import SkewedSwitch from '@/shared/components/CustomSwitch/SkewedSwitch';
import {useTranslation} from '@/shared/i18n';
import {AnimatedList} from '@/shared/components/AnimatedList/AnimatedList';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({theme}) => theme.media('lg', 'flex-direction: row')}
`;

const HomeListMenu = styled.div`
  background-color: #999;
  border-radius: 25px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);

  ${({theme}) => theme.media('xs', `
  transform: scale(0.5);
  `)}
  ${({theme}) => theme.media('sm', `
  transform: scale(1);
  `)}
`;

const StyledMenuItem = styled(MenuItem)`
  && {
    width: 200px;
  }
`;

const StyledButton = styled(Button)`

&& {
  width: 100px;
  height: 45px;
  margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
  background-color: #333;
  color: whitesmoke;

  &:hover {
    background-color: black;
  }
}

`;

const HomesList = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [isRent, setIsRent] = useState(false);
  const homes = useSelector((state) => state.homes);
  const [modifiedHomes, setModifiedHomes] = useState(null);
  // const currency = useSelector((state) => state.currency);

  if (isEmpty(homes)) {
    return <div>no homes stored</div>;
  }
  const propsArray = [
    {field: 'price', order: 'asc', buttonName: 'Price'},
    {field: 'price', order: 'desc', buttonName: 'Price'},
    {field: 'city', order: 'desc', buttonName: 'Name'},
    {field: 'city', order: 'asc', buttonName: 'Name'},
    {field: 'entry-date', order: 'asc', buttonName: 'Entry Date'},
    {field: 'entry-date', order: 'desc', buttonName: 'Entry Date'},
  ];
  const rentList = homes.filter(listObj => listObj.type === 'rent');
  const buyList = homes.filter(listObj => listObj.type === 'buy');
  const homesList = isRent ? {listData: rentList, type: 'rent'} : {listData: buyList, type: 'buy'};
  const RenderSortingButtons = () => {
    return _.times(6, (i) => {
      const icon = propsArray[i].order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
      return (
        <StyledMenuItem
          onClick={() => setModifiedHomes({
            listData: _.orderBy(homesList.listData,
              propsArray[i].field, propsArray[i].order),
            type: homesList.type,
          })}
          variant="outlined"
          color="primary"
        >{propsArray[i].buttonName} {icon}
        </StyledMenuItem>
      );
    });
  };

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
        <SkewedSwitch onChange={() => { setIsRent(!isRent); setModifiedHomes(null); }} />
        <StyledButton
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          onClick={handleClick}
        >
          Sort by
        </StyledButton>
      </div>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <RenderSortingButtons />
      </Menu>

      <Root style={{overflow: 'auto'}}>

        <AnimatedList homes={modifiedHomes || homesList} />
      </Root>
    </>
  );
};

export default memo(HomesList);
