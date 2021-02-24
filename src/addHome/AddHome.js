import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { omit } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import {useRouter} from 'next/router';

import { toBase64 } from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';
import fields from '@/shared/utils/homeFields';
import { event } from '@/shared/utils/gtag';

const AddHome = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const tempImages = useSelector(state => state.dropzone);

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage ? {
      ...omit(formValues, 'dropImage'),
      images: await Promise.all(tempImages.map(await toBase64)),
    } : formValues;

    modefiedFormValues.id = uuidv4();
    event('new_home_added', 'home_action', 'key_address', [formValues?.city, formValues?.street, formValues?.houseNumber].join(', '));

    await dispatch(actions.addHome(modefiedFormValues));
    await dispatch(actions.removeAllTempImages());
    router.push(`/home/${modefiedFormValues.id}`);
  };

  // temp
  const initialValues = fields.filter(({ name }) => name !== 'dropImage')
    .reduce((all, item) => ({
      ...(all || {}),
      [item.name]: item.initialValue,
    }), {});

  // temp Add shouldn't have initialValues on production.
  return (
    <HomeForm
      onSubmit={onSubmit}
      initialValues={initialValues}
    />
  );
};

export default memo(AddHome);
