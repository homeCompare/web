import React, {memo, useState} from 'react';

import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {filter, times, orderBy} from 'lodash';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Loader from 'react-loader-spinner';
import SearchBar from 'material-ui-search-bar';

import Button from '@/shared/components/Button';
import SkewedSwitch from '@/shared/components/CustomSwitch/SkewedSwitch';
import {AnimatedList} from '@/shared/components/AnimatedList/AnimatedList';
import {selectHomes, selectIsHomesLoaded} from '@/state/selectors';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({theme}) => theme.media('lg', 'flex-direction: row')}
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

const SORT_BY_OPTIONS = [
  {field: 'price', order: 'asc', buttonName: 'Price'},
  {field: 'price', order: 'desc', buttonName: 'Price'},
  {field: 'city', order: 'desc', buttonName: 'Name'},
  {field: 'city', order: 'asc', buttonName: 'Name'},
  {field: 'entry-date', order: 'asc', buttonName: 'Entry Date'},
  {field: 'entry-date', order: 'desc', buttonName: 'Entry Date'},
];

const HomesList = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRent, setIsRent] = useState(false);
  const [modifiedHomes, setModifiedHomes] = useState(null);

  const homes = useSelector(selectHomes);
  const homesLoaded = useSelector(selectIsHomesLoaded);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log('homesLoaded', homesLoaded);

  if (!homesLoaded && !homes) {
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

  if (homesLoaded && !homes) {
    return (<p>no homes in list, add some!</p>);
  }

  const rentList = homes.filter(listObj => listObj.type === 'rent');
  const buyList = homes.filter(listObj => listObj.type === 'buy');
  const homesList = isRent ? {listData: rentList, type: 'rent'} : {listData: buyList, type: 'buy'};

  const handleChange = (value) => {
    setModifiedHomes({
      listData: filter(
        homesList.listData,
        home => !home.city.toLowerCase().indexOf(value.toLowerCase()),
      ),
      type: homesList.type,
    });
  };

  const RenderSortingButtons = () => {
    return times(6, (i) => {
      const icon = SORT_BY_OPTIONS[i].order === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
      return (
        <StyledMenuItem
          key={`${SORT_BY_OPTIONS[i].field}${SORT_BY_OPTIONS[i].order}`}
          onClick={() => setModifiedHomes({
            listData: orderBy(homesList.listData,
              SORT_BY_OPTIONS[i].field, SORT_BY_OPTIONS[i].order),
            type: homesList.type,
          })}
          variant="outlined"
          color="primary"
        >{SORT_BY_OPTIONS[i].buttonName} {icon}
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
