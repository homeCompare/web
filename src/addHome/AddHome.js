import React, {memo, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {omit} from 'lodash';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'next/router';
import styled from 'styled-components';

import CustomSwitch from '@/shared/components/CustomSwitch/CustomSwitch';
import Switch from '@/shared/components/Switch';
import {toBase64} from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';
import {buyFields, rentFields} from '@/shared/utils/homeFields';
import {event} from '@/shared/utils/gtag';

const StyledSwitch = styled(Switch)`
  &&& {
    margin-bottom: 16px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const AddHome = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const router = useRouter();
  console.log(user);
  const tempImages = useSelector(state => state.dropzone);
  const [isRent, setIsRent] = useState(false);
  const fields = isRent ? rentFields : buyFields;

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage ? {
      ...omit(formValues, 'dropImage'),
      images: await Promise.all(tempImages.map(await toBase64)),
    } : formValues;

    modefiedFormValues.id = uuidv4();
    if (isRent) modefiedFormValues.type = 'rent';
    else modefiedFormValues.type = 'buy';
    modefiedFormValues.price = Number(modefiedFormValues.price);

    event('new_home_added', 'home_action', 'key_address', [formValues?.city, formValues?.street, formValues?.houseNumber].join(', '));

    await dispatch(actions.addHome(modefiedFormValues));

      // if user is premium call upserthometodb
    if (user) {
      if (user.isPremium) dispatch(actions.upsertHomeToDb(user.id, modefiedFormValues, undefined));
    }
    await dispatch(actions.removeAllTempImages());
    router.push(`/home/${modefiedFormValues.id}`);
  };
  // temp
  const initialValues = fields.filter(({name}) => name !== 'dropImage')
    .reduce((all, item) => ({
      ...(all || {}),
      [item.name]: item.initialValue,
    }), {});

  // temp Add shouldn't have initialValues on production.
  return (
    <>
      <div style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'center'}}>
        <CustomSwitch onChange={() => { setIsRent(!isRent); dispatch(actions.removeAllTempImages()); }} />
      </div>
      <HomeForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        fields={fields}
      />
    </>
  );
};

export default memo(AddHome);
