import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { omit } from 'lodash';
import {useRouter} from 'next/router';

import { toBase64 } from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';
import { event } from '@/shared/utils/gtag';

const EditHome = ({home}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage ? {
      ...omit(formValues, 'dropImage'),
      images: await Promise.all(formValues?.dropImage?.map(await toBase64)),
    } : formValues;

    event('edit_home_event', 'categoryV', 'label', 'value');

    await dispatch(actions.editHome(modefiedFormValues));
    router.push(`/home/${modefiedFormValues.id}`);
  };

  return (
    <HomeForm
      onSubmit={onSubmit}
      initialValues={home}
    />
  );
};

export default memo(EditHome);
