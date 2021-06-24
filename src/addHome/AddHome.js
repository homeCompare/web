import React, {memo, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {omit} from 'lodash';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'next/router';

import CustomSwitch from '@/shared/components/CustomSwitch/CustomSwitch';
import {toBase64} from '@/shared/utils/base64';
import * as actions from '@/state/actions';
import HomeForm from '@/shared/components/HomeForm';
import {buyFields, rentFields} from '@/shared/utils/homeFields';
import {event} from '@/shared/utils/gtag';
import {selectUserData} from '@/state/selectors';

const AddHome = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const router = useRouter();
  const tempImages = useSelector((state) => state.dropzone);
  const [isRent, setIsRent] = useState(false);
  const fields = isRent ? rentFields : buyFields;

  const onSubmit = async (formValues = {}) => {
    // modifying dropImage into images (array of strings of base64).
    const modefiedFormValues = formValues.dropImage
      ? {
        ...omit(formValues, 'dropImage'),
        images: await Promise.all(tempImages.map(await toBase64)),
      }
      : formValues;

    modefiedFormValues.id = uuidv4();
    modefiedFormValues.type = isRent ? 'rent' : 'buy';
    modefiedFormValues.price = Number(modefiedFormValues.price);

    event(
      'new_home_added',
      'home_action',
      'key_address',
      [formValues?.city, formValues?.street, formValues?.houseNumber].join(', '),
    );

    if (user?.isPremium) {
      await dispatch(actions.addRemoteHome(modefiedFormValues));
    } else {
      dispatch(actions.addLocalHome(modefiedFormValues));
    }

    dispatch(actions.removeAllTempImages());
    router.push(`/home/${modefiedFormValues.id}`);
  };

  // temp
  const initialValues = fields
    .filter(({name}) => name !== 'dropImage')
    .reduce(
      (all, item) => ({
        ...(all || {}),
        [item.name]: item.initialValue,
      }),
      {},
    );

  // temp Add shouldn't have initialValues on production.
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <CustomSwitch
          onChange={() => {
            setIsRent(!isRent);
            dispatch(actions.removeAllTempImages());
          }}
        />
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
