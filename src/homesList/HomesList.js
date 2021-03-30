import React, {memo, useState} from 'react';

import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

import SkewedSwitch from '@/shared/components/CustomSwitch/SkewedSwitch';
import {useTranslation} from '@/shared/i18n';
import {AnimatedList} from '@/shared/components/AnimatedList/AnimatedList';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({theme}) => theme.media('lg', 'flex-direction: row')}
`;

const HomesList = () => {
  const [isRent, setIsRent] = useState(false);
  const homes = useSelector((state) => state.homes);
  // const currency = useSelector((state) => state.currency);

  if (isEmpty(homes)) {
    return <div>no homes stored</div>;
  }

  const rentList = homes.filter(listObj => listObj.type === 'rent');
  const buyList = homes.filter(listObj => listObj.type === 'buy');

  const homesList = isRent ? {listData: rentList, type: 'rent'} : {listData: buyList, type: 'buy'};

  return (
    <>
      <SkewedSwitch onChange={() => setIsRent(!isRent)} />
      <Root style={{overflow: 'auto'}}>

        <AnimatedList homes={homesList} />
      </Root>
    </>
  );
};

export default memo(HomesList);
