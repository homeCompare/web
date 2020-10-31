import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { omit } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

import { pushRoute } from '@/shared/utils/router';
import { toBase64 } from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';

const EditHome = ({home}) => {
  const dispatch = useDispatch();

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage ? {
      ...omit(formValues, 'dropImage'),
      images: await Promise.all(formValues?.dropImage?.map(await toBase64)),
    } : formValues;

    await dispatch(actions.editHome(modefiedFormValues));
    pushRoute(`/home/${modefiedFormValues.id}`);
  };

  return (
    <HomeForm
      onSubmit={onSubmit}
      initialValues={home}
    />
  );
};

export default memo(EditHome);
