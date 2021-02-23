import React, {memo, useState} from 'react';
import {Form} from 'react-final-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {useTranslation} from '@/shared/i18n';
import CustomField from '@/shared/components/CustomField';

import fields from '@/shared/utils/homeFields';

const ButtonZone = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-between;


`;

const ProgressBar = styled.ul`

  margin-bottom: 30px;
  overflow: hidden;
  /*CSS counters to number the steps*/
  counter-reset: step;
  text-align: center;

  li {
  
  list-style-type: none;
  color: rgb(51, 51, 51);
  text-transform: uppercase;
  font-size: 12px;
  width: 33%;
  float: left;
  position: relative;


  &.active:before, &.active:after {
    background: #7B1FA2;
    color: white;
  }
  
  }

  li:before {

    content: counter(step);
  counter-increment: step;
  width: 20px;
  line-height: 20px;
  display: block;
  font-size: 10px;
  color: #333;
  background: white;
  border-radius: 3px;
  margin: 0 auto 5px auto;

  }

  li:after {
  content: '';
  width: 100%;
  height: 2px;
  background: white;
  position: absolute;
  left: -50%;
  top: 9px;
  z-index: -1; /*put it behind the numbers*/
  }

  li:first-child:after{
   content: none;
  }

 
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column; 

  
`;

const FieldWrapper = styled.div`
  margin: ${({ theme }) => theme.size(1)} 0;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const onSubmitNewHomeValidation = entries => {
  const errors = {};

  fields.forEach(field => {
    if (!field.validation) {
      return;
    }

    // checking numbers only fields.
    // eslint-disable-next-line no-restricted-globals
    if (entries[field.name] && field.validation?.numberOnly && isNaN(entries[field.name])) {
      errors[field.name] = 'error_numbers_only';
    }

    // checking required fields.
    if (field.validation?.required && !entries[field.name]) {
      errors[field.name] = 'error_field_required';
    }
  });

  const isFormHasErrors = Object.keys(errors).length;
  if (!isFormHasErrors) {
    return null;
  }

  return errors;
};

const HomeForm = ({onSubmit, initialValues = {}}) => {
  const isEditMode = initialValues.id;
  const {t} = useTranslation();

  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    let updatedCurrentStep = currentStep;
    updatedCurrentStep = updatedCurrentStep >= 2 ? 3 : updatedCurrentStep + 1;
    setCurrentStep(updatedCurrentStep);
  };

  const prev = () => {
    let updatedCurrentStep = currentStep;
    updatedCurrentStep = updatedCurrentStep <= 1 ? 1 : updatedCurrentStep - 1;
    setCurrentStep(updatedCurrentStep);
  };

  const previousButton = () => {
    if (currentStep !== 1) {
      return (
        <Button
          color="primary"
          type="button"
          onClick={prev}
        >

          Previous
        </Button>

      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <Button
          style={{alignItems: 'flex-end'}}
          color="secondary"
          type="button"
          onClick={next}
        >

          Next
        </Button>

      );
    }
    return null;
  };

  const step1 = () => {
    if (currentStep !== 1) {
      return null;
    }
    return fields.map((field, index) => {
      if (index < 5) {
        return (
          <FieldWrapper key={field.name}>
            <CustomField {...field} />
          </FieldWrapper>
        );
      }
    });
  };

  const step2 = () => {
    if (currentStep !== 2) {
      return null;
    }
    return fields.map((field, index) => {
      if (index >= 5 && index < 10) {
        return (
          <FieldWrapper key={field.name}>
            <CustomField {...field} />
          </FieldWrapper>
        );
      }
    });
  };

  const step3 = (invalid) => {
    if (currentStep !== 3) {
      return null;
    }
    const fieldZone = fields.map((field, index) => {
      if (index >= 10 && index < 20) {
        return (
          <FieldWrapper key={field.name}>
            <CustomField {...field} />
          </FieldWrapper>
        );
      }
    });
    return (
      <>
        {fieldZone}
        <StyledButton type="submit" disabled={invalid}>{t(isEditMode ? 'edit_home' : 'add_new_home')}</StyledButton>

      </>
    );
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={onSubmitNewHomeValidation}
      initialValues={initialValues}
    >
      {({ handleSubmit, invalid }) => {
        return (
          <form name="homeForm" id="homeForm" onSubmit={handleSubmit}>
            <ProgressBar>
              <li className={(currentStep === 1) ? 'active' : 'null'}>Location

              </li>
              <li
                className={(currentStep === 2) ? 'active' : 'null'}
              >Aquisition
              </li>
              <li
                className={(currentStep === 3) ? 'active' : 'null'}
              >Features
              </li>
            </ProgressBar>

            <FormWrapper>
              {step1()}
              {step2()}
              {step3(invalid)}

            </FormWrapper>
            <ButtonZone>
              { previousButton()}
              { nextButton()}
            </ButtonZone>
          </form>
        );
      }}
    </Form>
  );
};

export default memo(HomeForm);
