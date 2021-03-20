import React, {useState, memo} from 'react';

import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {isEmpty, snakeCase} from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import {getHomeShortAddress, getPriceWithCurrency} from '@/shared/utils/general';
import ConfirmDialog from '@/shared/components/ConfirmDialog';
import * as actions from '@/state/actions';
import {useTranslation} from '@/shared/i18n';
import {AnimatedList} from '@/shared/components/AnimatedList/AnimatedList';

import HomeSubCell from './HomeSubCell';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({theme}) => theme.media('lg', 'flex-direction: row')};
`;

const HeaderCell = styled(TableCell)`
  && {
    font-weight: bold;
  }
`;

const StyledTableRow = styled(TableRow)`
  && {
    cursor: pointer;
  }
`;

const HomesList = () => {
  const {t} = useTranslation();
  const [confirmRemoveHomeId, setConfirmRemoveHomeId] = useState();
  const dispatch = useDispatch();
  const Homes = useSelector((state) => state.homes);
  // const currency = useSelector((state) => state.currency);

  if (isEmpty(Homes)) {
    return <div>no homes stored</div>;
  }

  // const onRemoveHomeButtonClick = (homeId) => {
  //   setConfirmRemoveHomeId(homeId);
  // };

  const onConfirmedRemoveButtonClick = () => {
    dispatch(actions.removeHomeById(confirmRemoveHomeId));
    setConfirmRemoveHomeId(null);
  };

  return (
    <Root>
      <AnimatedList homes={Homes} />
    </Root>
  );
};

export default memo(HomesList);
