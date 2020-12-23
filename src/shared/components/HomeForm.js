import React, {memo, useState} from 'react';
import {Form} from 'react-final-form';
import styled from 'styled-components';

import {useTranslation} from '@/shared/i18n';
import Button from '@/shared/components/Button';
import CustomField from '@/shared/components/CustomField';

import fields from '@/shared/utils/homeFields';

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
        <button
          type="button"
          onClick={prev}
        >
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return (
        <button
          type="button"
          onClick={next}
        >
          Next
        </button>
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
            <FormWrapper>
              {step1()}
              {step2()}
              {step3(invalid)}

            </FormWrapper>
            { previousButton()}
            { nextButton()}
          </form>
        );
      }}
    </Form>
  );
};

export default memo(HomeForm);
