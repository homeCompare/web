import {useState} from 'react';

import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios';
import styled from 'styled-components';

import * as actions from '@/state/actions';

const StyledCell = styled.div`
  background-color: #6772e5;
  margin: 100px 100px;
  * {
    font-family: Roboto, Open Sans, Segoe UI, sans-serif;
    font-size: 16px;
    font-weight: 500;
  }
  fieldset {
    margin: 10px 15px 20px 20px;
    padding: 0;
    border-style: none;
    background-color: #7795f8;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #829fff;
    border-radius: 4px;
  }
  label {
    width: 15%;
    min-width: 70px;
    padding: 11px 0;
    color: #c4f0ff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    padding: 15px 35px;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #fce883;
    transition: background-color 100000000s;
    -webkit-animation: 1ms void-animation-out;
  }

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }
  .StripeElement {
    width: 100%;
    padding: 11px 15px 11px 0;
  }

  input {
    width: 100%;
    padding: 11px 15px 11px 0;
    color: #fff;
    border-style: none;
    background-color: transparent;
    -webkit-animation: 1ms void-animation-out;
  }

  input::-webkit-input-placeholder {
    color: #87bbfd;
  }
  input::-moz-placeholder {
    color: #87bbfd;
  }
  input:-ms-input-placeholder {
    color: #87bbfd;
  }
  button {
    display: block;
    width: calc(100% - 30px);
    height: 40px;
    margin: 40px 15px 0;
    background-color: #f6a4eb;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #ffb9f6;
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border-style: none;
  }
  button:active {
    background-color: #d782d9;
    box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 #e298d8;
  }
`;
const StyledRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;
`;

const CheckoutForm = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const homes = useSelector(state => state.homes.data);
  console.log(homes);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitSub = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email,
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      const res = await axios.post('/api/sub', {
        payment_method: result.paymentMethod.id,
        email,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });

      const {client_secret, status} = res.data;

      if (status === 'requires_action') {
        const paymentConfirmation = await stripe.confirmCardPayment(client_secret);
        if (!paymentConfirmation.error) {
          const user = await dispatch(actions.facebookLogin(homes));
          const {userToken, id} = user;
          await dispatch(actions.getHomesFromDb(id));
          await axios.post('/api/make-premium-user', {
            user,
          });
          router.push('/');
        }
      } else {
        const user = await dispatch(actions.facebookLogin(homes));
        const {userToken, id} = user;
        await dispatch(actions.getHomesFromDb(id));
        await axios.post('/api/make-premium-user', {
          user,
        });
        router.push('/');
      }
    }
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <StyledCell>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <StyledRow>
            <label
              htmlFor="example1-name"
              data-tid="elements_examples.form.name_label"
            >
              Name
            </label>
            <input
              id="example1-name"
              data-tid="elements_examples.form.name_placeholder"
              type="text"
              placeholder="Jane Doe"
              required=""
              autoComplete="name"
            />
          </StyledRow>
          <StyledRow>
            <label
              htmlFor="example1-email"
              data-tid="elements_examples.form.email_label"
            >
              Email
            </label>
            <input
              id="example1-email"
              data-tid="elements_examples.form.email_placeholder"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="janedoe@gmail.com"
              required=""
              autoComplete="email"
            />
          </StyledRow>
          <StyledRow>
            <label
              htmlFor="example1-phone"
              data-tid="elements_examples.form.phone_label"
            >
              Phone
            </label>
            <input
              id="example1-phone"
              data-tid="elements_examples.form.phone_placeholder"
              type="tel"
              placeholder="(941) 555-0123"
              required=""
              autoComplete="tel"
            />
          </StyledRow>
        </fieldset>
        <fieldset>
          <CardElement
            options={{
              iconStyle: 'solid',
              style: {
                base: {
                  iconColor: '#c4f0ff',
                  color: '#fff',
                  fontWeight: 500,
                  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
                  fontSize: '16px',
                  fontSmoothing: 'antialiased',

                  ':-webkit-autofill': {
                    color: '#fce883',
                  },
                  '::placeholder': {
                    color: '#87BBFD',
                  },
                },
                invalid: {
                  iconColor: '#FFC7EE',
                  color: '#FFC7EE',
                },
              },
            }}
          />
        </fieldset>
        <button type="submit" disabled={!stripe} onClick={handleSubmitSub}>
          Pay
        </button>
      </form>
    </StyledCell>
  );
};

export default CheckoutForm;
