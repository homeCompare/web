import React, {memo, useState, useEffect} from 'react';

import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import _, {isEmpty} from 'lodash';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Loader from 'react-loader-spinner';
import SearchBar from 'material-ui-search-bar';

import * as actions from '@/state/actions';
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
  const dispatch = useDispatch();
  const user = useSelector((state) => (state.user.data));
  useEffect(() => {
    const getHomesFromDB = async () => {
      console.log('triggered');
      const homes = await dispatch(actions.getHomesFromDb(user.id));
      dispatch(actions.setHomes(homes));
    };
    if (user) getHomesFromDB();
  }, [homes]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isRent, setIsRent] = useState(false);
  const homes = useSelector((state) => (state.homes.data));
  const [modifiedHomes, setModifiedHomes] = useState(null);
  console.log(homes);
  // const currency = useSelector((state) => state.currency);

  if (isEmpty(homes)) {
    return (
      <Loader
        style={{textAlign: 'center'}}
        type="Rings"
        color="gray"
        height={300}
        width={300}
        timeout={3000}
      />
    );
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

  const handleChange = (value) => {
    setModifiedHomes({
      listData: _.filter(homesList.listData, {city: value}),
      type: homesList.type,
    });
  };

  const RenderSortingButtons = () => {
    return _.times(6, (i) => {
      const icon = propsArray[i].order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
      return (
        <StyledMenuItem
          key={`${propsArray[i].field}${propsArray[i].order}`}
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
        <SearchBar
          onChange={handleChange}
          onRequestSearch={handleChange}
          style={{
            margin: '0 auto',
            width: 800,
          }}
        />
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
