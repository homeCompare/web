/* eslint-disable max-len */
import {useState} from 'react';

import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

import {SubmitButton, Container, Form} from '@/register/styled';
import Layout from '@/shared/components/Layout';
import Meta from '@/shared/components/Meta';
import * as actions from '@/state/actions';
import {selectHomes} from '@/state/selectors';
import {googleLogin} from '@/shared/utils/auth';
import Button from '@/shared/components/Button';
import {useTranslation} from '@/shared/i18n';

const CheckoutForm = () => {
  const [socialConnectionData, setSocialConnectionData] = useState();
  const [formError, setFormError] = useState();

  const homes = useSelector(selectHomes);

  const dispatch = useDispatch();
  const router = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const {t} = useTranslation();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      throw new Error('Strip\'s loading issue');
    }

    const {paymentMethod, error: paymentMethodError} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {email: socialConnectionData.email},
    });

    if (paymentMethodError) {
      setFormError(String(paymentMethodError));
      return;
    }

    try {
      await dispatch(actions.register({homes, paymentMethod, socialConnectionData}));
      router.push('/');
    } catch (error) {
      setFormError(String(error));
    }
  };

  const onLogin = async () => {
    const googleUserData = await googleLogin();
    setSocialConnectionData(googleUserData);
  };

  return (
    <>
      <Meta title={t('get_primum_account')} />
      <Layout hideSide>
        <h1>{t('get_primum_account')}</h1>
        <p>
          Primum account gains you the benefit of ..., follow the steps below to gain you'r single month subscription.
        </p>

        <Container>
          {!socialConnectionData ? (
            <>
              <h2>Sign up</h2>
              <p>
                using google lets you easier and faster connection to homeCompare from any device.
              </p>
              <Button onClick={onLogin} target="_blank">Sign up with Google</Button>
            </>
          ) : (
            <>
              <h2>Payment information</h2>
              <p>Fill up credit card information.</p>
              {formError && (
                <b>Error: {formError}</b>
              )}
              <Form onSubmit={onSubmit}>
                <fieldset>
                  <CardElement />
                </fieldset>
                <SubmitButton type="submit" disabled={!stripe}>
                  Pay
                </SubmitButton>
              </Form>
              <ul>
                <li><i>* Payments are made using stripe.com (<a href="https://stripe.com/docs/security/stripe">see Security at Stripe</a>)</i></li>
                <li><i>* Every payment is individual and activate a primum benefits for a month.</i></li>
              </ul>
            </>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default CheckoutForm;
