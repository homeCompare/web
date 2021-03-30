import React, {memo, useState} from 'react';

import styled from 'styled-components';
import {useSelector} from 'react-redux';
import _, {isEmpty} from 'lodash';

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

const StyledButton = styled(Button)`

&& {
  margin-left: 10px;
}

`;

const HomesList = () => {
  const [isRent, setIsRent] = useState(false);
  const homes = useSelector((state) => state.homes);
  const [modifiedHomes, setModifiedHomes] = useState(null);
  // const currency = useSelector((state) => state.currency);

  if (isEmpty(homes)) {
    return <div>no homes stored</div>;
  }
  const propsArray = [
    {field: 'price', order: 'asc', buttonName: 'Price Ascending'},
    {field: 'price', order: 'desc', buttonName: 'Price Descending'},
    {field: 'city', order: 'desc', buttonName: 'Name A-Z'},
    {field: 'city', order: 'asc', buttonName: 'Name Z-A'},
    {field: 'entry-date', order: 'asc', buttonName: 'Entry Date Asc'},
    {field: 'entry-date', order: 'desc', buttonName: 'Entry Date Desc'},
  ];
  const rentList = homes.filter(listObj => listObj.type === 'rent');
  const buyList = homes.filter(listObj => listObj.type === 'buy');

  const homesList = isRent ? {listData: rentList, type: 'rent'} : {listData: buyList, type: 'buy'};
  const RenderSortingButtons = () => {
    return _.times(6, (i) => {
      return (
        <StyledButton onClick={() => setModifiedHomes({
          listData: _.orderBy(homesList.listData,
            propsArray[i].field, propsArray[i].order),
          type: homesList.type,
        })}
        >{propsArray[i].buttonName}
        </StyledButton>
      );
    });
  };
  console.log(modifiedHomes);

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <SkewedSwitch onChange={() => { setIsRent(!isRent); setModifiedHomes(null); }} />
        <h3 style={{marginLeft: '20px', marginTop: '10px'}}>Sort by:</h3>
        <RenderSortingButtons />
      </div>

      <Root style={{overflow: 'auto'}}>

        <AnimatedList homes={modifiedHomes || homesList} />
      </Root>
    </>
  );
};

export default memo(HomesList);
