import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {isEmpty, snakeCase} from 'lodash';

import * as actions from '@/state/actions';
import ConfirmDialog from '@/shared/components/ConfirmDialog';
import {getHomeShortAddress, getPriceWithCurrency} from '@/shared/utils/general';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useTranslation } from '@/shared/i18n';
import HomeSubCell from './HomeSubCell';

const Root = styled.div`
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) =>
    theme.media(
      'lg',
      `
    flex-direction: row;
  `,
    )};
`;

const HomeCardWrapper = styled.div`
  width: 100%;
  margin-right: ${({ theme }) => theme.size(1)};
  ${({ theme }) =>
    theme.media(
      'lg',
      `
    width: 282px;
  `,
    )} margin-bottom: ${({ theme }) => theme.size(1)};
  &:last-child {
    margin-bottom: 0;
  }
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
      <ConfirmDialog
        title="confirm_delete_title"
        content="confirm_delete_content"
        open={Boolean(confirmRemoveHomeId)}
        handleConfirm={onConfirmedRemoveButtonClick}
        handleClose={() => setConfirmRemoveHomeId(null)}
      />

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <HeaderCell>{t('address')}</HeaderCell>
              <HeaderCell>{t('price')}</HeaderCell>
              <HeaderCell>{t(snakeCase('numberOfRooms'))}</HeaderCell>
              <HeaderCell>{t(snakeCase('entryDate'))}</HeaderCell>
              <HeaderCell>{t(snakeCase('personalRate'))}</HeaderCell>
              <HeaderCell>{t('manage')}</HeaderCell>
            </TableRow>
          </TableHead>
          
            {Homes.map(home => {
              const [isOpen, setIsOpen] = useState(false);

              return (
              <TableBody key={home.id}>
                <StyledTableRow onClick={() => {setIsOpen(!isOpen)}}>
                  <TableCell>{getHomeShortAddress(home)}</TableCell>
                  <TableCell>{getPriceWithCurrency(home.price)}</TableCell>
                  <TableCell>{home.numberOfRooms}</TableCell>
                  <TableCell>{home.entryDate}</TableCell>
                  <TableCell>{home.personalRate}</TableCell>
                  <TableCell>Delete / Edit</TableCell> {/** todo: make a pritter icon and attach fix onClick too*/}
                </StyledTableRow>
                {isOpen && (
                  <TableRow key={`sub_${home.id}`}>
                    <TableCell colSpan={6}>
                      <HomeSubCell t={t} home={home}/>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            );
          })}
          
        </Table>
      </TableContainer>
    </Root>
  );
};

export default memo(HomesList);
