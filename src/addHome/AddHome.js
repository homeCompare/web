import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { omit } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { pushRoute } from '@/shared/utils/router';
import { toBase64 } from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';
import fields from '@/shared/utils/homeFields';
import { event } from '@/shared/utils/gtag';

const AddHome = () => {
  const dispatch = useDispatch();

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage ? {
      ...omit(formValues, 'dropImage'),
      images: await Promise.all(formValues?.dropImage?.map(await toBase64)),
    } : formValues;

    modefiedFormValues.id = uuidv4();
    event('new_home_added', 'categoryV', 'labelV', modefiedFormValues);

    await dispatch(actions.addHome(modefiedFormValues));
    pushRoute(`/home/${modefiedFormValues.id}`);
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
