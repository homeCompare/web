import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import * as actions from '@/state/actions';
import HomeCard from '@/homesList/HomeCard';
import ConfirmDialog from '@/shared/components/ConfirmDialog';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.media('lg', `
    flex-direction: row;
  `)};
`;

const HomeCardWrapper = styled.div`
  width: 100%;
  margin-right: ${({ theme }) => theme.size(1)};
  ${({ theme }) => theme.media('lg', `
    width: 300px;
  `)}
  margin-bottom: ${({ theme }) => theme.size(1)};
  &:last-child {
    margin-bottom: 0;
  }
`;

const HomesList = () => {
  const [confirmRemoveHomeId, setConfirmRemoveHomeId] = useState();
  const dispatch = useDispatch();
  const Homes = useSelector((state) => state.homes);
  const currency = useSelector((state) => state.currency);

  if (isEmpty(Homes)) {
    return <div>no homes stored</div>;
  }

  const onRemoveHomeButtonClick = homeId => {
    setConfirmRemoveHomeId(homeId);
  };

  const onConfirmedRemoveButtonClick = () => {
    dispatch(actions.removeHomeById(confirmRemoveHomeId));
    setConfirmRemoveHomeId(null);
  };

  return (
    <Root>
      <ConfirmDialog
        title="confirm_delete_title"
        content="confirm_delete_content"
        open={Boolean(confirmRemoveHomeId)}
        handleConfirm={onConfirmedRemoveButtonClick}
        handleClose={() => setConfirmRemoveHomeId(null)}
      />
      {Homes.map((home) => (
        <HomeCardWrapper key={home.id}>
          <HomeCard {...home} currency={currency} onRemoveHome={onRemoveHomeButtonClick} />
        </HomeCardWrapper>
      ))}
    </Root>
  );
};

export default memo(HomesList);
