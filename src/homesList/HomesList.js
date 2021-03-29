import React, {memo} from 'react';

import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

import {useTranslation} from '@/shared/i18n';
import {AnimatedList} from '@/shared/components/AnimatedList/AnimatedList';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({theme}) => theme.media('lg', 'flex-direction: row')}
`;

const HomesList = () => {
  const Homes = useSelector((state) => state.homes);
  // const currency = useSelector((state) => state.currency);

  if (isEmpty(Homes)) {
    return <div>no homes stored</div>;
  }

  // const onRemoveHomeButtonClick = (homeId) => {
  //   setConfirmRemoveHomeId(homeId);
  // };

  return (
    <Root style={{overflow: 'auto'}}>
      <AnimatedList homes={Homes} />
    </Root>
  );
};

export default memo(HomesList);
