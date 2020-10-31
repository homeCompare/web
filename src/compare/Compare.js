import React, {memo, useState} from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import {useTranslation} from '@/shared/i18n';
import TouchAppIconIcon from '@material-ui/icons/TouchApp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Button from '@/shared/components/Button';
import CompareCard, { HomeCompareCard, HomeCompareItem, HomeCompareImage } from './CompareCard';

const SlideRightGuider = styled.div`
  display: flex;
  position: absolute;
`;

const CompareWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Compare = () => {
  const { t } = useTranslation();
  const homes = useSelector((state) => state.homes);
  const [homesToCompare, setHomesToCompare] = useState();

  const addHomeToCompare = home => {
    const isHomeAlreadyInCompareList = homesToCompare?.find(({ id }) => id === home.id);
    if (isHomeAlreadyInCompareList) {
      setHomesToCompare(homesToCompare.filter(({ id }) => id !== home.id));
      return;
    }

    setHomesToCompare([
      ...(homesToCompare || []),
      home,
    ]);
  };

  return (
    <>
      Pick apartments to compare between:
      {homes?.map(home => (
        <Button key={home.id} onClick={() => addHomeToCompare(home)}>{home.id}</Button>
      ))}

      <h2>Comparession</h2>
      <CompareWrapper>
        <HomeCompareCard>
          <HomeCompareImage>Main image</HomeCompareImage>
          {Boolean(homesToCompare?.length) && Object.keys(homesToCompare[0]).map(fieldKey => (
            <HomeCompareItem key={fieldKey}>{fieldKey}</HomeCompareItem>
          ))}
        </HomeCompareCard>
        <SlideRightGuider>
          <TouchAppIconIcon />
          <ArrowRightAltIcon />
        </SlideRightGuider>
        {homesToCompare?.map(home => <CompareCard key={home.id} {...home} />)}
      </CompareWrapper>
    </>
  );
};

export default memo(Compare);
