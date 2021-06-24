import React, {memo} from 'react';

import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';
import {useSelector, useDispatch} from 'react-redux';
import {omit} from 'lodash';
import {useRouter} from 'next/router';

import {upsertHomeToDb} from '@/shared/utils/db';
import {toBase64} from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';
import {event} from '@/shared/utils/gtag';
import {buyFields, rentFields} from '@/shared/utils/homeFields';
import {selectUserData} from '@/state/selectors';

const EditHome = ({home}) => {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();
  const router = useRouter();
  const tempImages = useSelector(state => state.dropzone);
  const fields = home.type === 'rent' ? rentFields : buyFields;

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage ? {
      ...omit(formValues, 'dropImage'),
      images: await Promise.all(tempImages.map(await toBase64)),
    } : formValues;
    event('edit_home_event', 'home_action', 'key_address', [formValues?.city, formValues?.street, formValues?.houseNumber].join(', '));

    if (user?.isPremium) {
      await dispatch(actions.editRemoteHome(modefiedFormValues));
    } else {
      dispatch(actions.editLocalHome(modefiedFormValues));
    }

    router.push(`/home/${modefiedFormValues.id}`);
  };

  return (

    <HomeForm
      onSubmit={onSubmit}
      initialValues={home}
      fields={fields}
    />
  );
};

EditHome.propTypes = {
  home: PropTypes.object,
};

export default memo(EditHome);
