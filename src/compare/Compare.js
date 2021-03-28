import React, {memo, useState} from 'react';

import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {snakeCase} from 'lodash';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import TouchAppIconIcon from '@material-ui/icons/TouchApp';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import CustomSwitch from '@/shared/components/CustomSwitch/CustomSwitch';
import {useTranslation} from '@/shared/i18n';
import {reorder} from '@/shared/utils/dnd';

import HomeOptionButton from './HomeOptionButton';
import CompareCard, {HomeCompareCardULRow, HomeCompareCardUL, HomeCompareItem, HomeCompareImage} from './CompareCol';

const SlideRightGuider = styled.div`
  display: flex;
  position: absolute;
`;

const CompareWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const HomesList = styled.div`
  display: flex;
  flex: 1;
`;

const DraggableItem = styled.div`
  ${({isDragging, theme}) => isDragging && `
    background-color: ${theme.colors.thinGrey};
    color: ${theme.colors.white};
  `}
`;
const sharedCompareFields = [
  'city',
  'street',
  'blockNumber',
  'houseNumber',
  'areaRate',
  'personalRate',
  'numberOfRooms',
  'floor',
  'squareMeter',
  'freeText',
  'entryDate',
  'hasBlacony',
  'hasGarage',
  'isRenovated',
  'hasAirConditioner',
  'id',
];

const buyFields = [
  ...sharedCompareFields,
  'price',
  'propertyTax',
  'buildingTax',
];

const rentFields = [
  ...sharedCompareFields,
  'rent',
];

const Compare = () => {
  const {t} = useTranslation();
  const homes = useSelector((state) => state.homes);
  const [homesToCompare, setHomesToCompare] = useState();

  const [isRent, setIsRent] = useState(false);
  const rentList = homes?.filter(home => home.type === 'rent');
  const buyList = homes?.filter(home => home.type === 'buy');
  const list = isRent ? rentList : buyList;
  const fieldToCompare = isRent ? buyFields : rentFields;

  const onDragEnd = result => {
    if (!result.destination) {
      return; // dropped outside the list
    }

    setHomesToCompare(reorder(
      homesToCompare,
      result.source.index,
      result.destination.index,
    ));
  };

  const addHomeToCompare = home => {
    const isHomeAlreadyInCompareList = homesToCompare?.find(({id}) => id === home.id);
    if (isHomeAlreadyInCompareList) {
      setHomesToCompare(homesToCompare.filter(({id}) => id !== home.id));
      return;
    }

    setHomesToCompare([
      home,
      ...(homesToCompare || []),
    ]);
  };

  return (
    <>
      <CustomSwitch onChange={() => { setIsRent(!isRent); setHomesToCompare([]); }} />
      <p>{t('compare_page_paragraph')}</p>

      <HomesList>
        {list?.map(home => (
          <HomeOptionButton
            key={home.id}
            onClick={() => addHomeToCompare(home)}
            {...home}

            isActive={Boolean(homesToCompare?.find(({id}) => id === home.id))}

          />
        ))}
      </HomesList>

      <p>{t('compare_page_paragraph_1')}</p>
      <p>{t('compare_page_paragraph_2')}</p>

      {Boolean(homesToCompare?.length) && (
        <CompareWrapper>

          <HomeCompareCardULRow>
            <li>
              <HomeCompareCardUL>
                <HomeCompareImage>{t('main_image')}</HomeCompareImage>
                {fieldToCompare.map(fieldKey => (
                  <HomeCompareItem key={fieldKey} $isBold>{t(snakeCase(fieldKey))}</HomeCompareItem>
                ))}
              </HomeCompareCardUL>
            </li>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    style={{display: 'flex'}}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {homesToCompare.map((home, index) => (
                      <Draggable key={home.id} draggableId={home.id} index={index}>
                        {(provided, snapshot) => (
                          <DraggableItem
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <CompareCard fieldsToCompare={fieldToCompare} {...home} />
                          </DraggableItem>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </HomeCompareCardULRow>

          <SlideRightGuider>
            <TouchAppIconIcon />
            <ArrowRightAltIcon />
          </SlideRightGuider>

        </CompareWrapper>
      )}
    </>
  );
};

export default memo(Compare);
