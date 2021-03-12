import React, {memo, useState} from 'react';

import {Form} from 'react-final-form';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import CustomField from '@/shared/components/CustomField';
import {useTranslation} from '@/shared/i18n';
import fields from '@/shared/utils/homeFields';

const ButtonZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  
`;

const FieldWrapper = styled.div`
  margin: ${({theme}) => theme.size(1)} 0;
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

function getSteps() {
  return ['Location', 'Pricing', 'Features'];
}

const HomeForm = ({onSubmit, initialValues = {}}) => {
  const isEditMode = initialValues.id;
  const {t} = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const previousButton = () => {
    if (activeStep !== 0) {
      return (
        <Button
          color="primary"
          type="button"
          onClick={handleBack}
        >

          Previous
        </Button>

      );
    }
    return null;
  };

  const nextButton = () => {
    if (activeStep < 2) {
      return (
        <Button
          style={{alignItems: 'flex-end'}}
          color="secondary"
          type="button"
          onClick={handleNext}
        >
          Next
        </Button>
      );
    }
    return null;
  };

  const step1 = () => {
    if (activeStep !== 0) {
      return null;
    }
    return fields.map((field, index) => {
      if (index < 5) {
        if (field.type === 'dropZone') {
          return (
            <FieldWrapper key={field.name}>
              <CustomField {...field} />
            </FieldWrapper>
          );
        }
        return (
          <FieldWrapper key={field.name}>
            <CustomField {...field} />
          </FieldWrapper>
        );
      }
    });
  };

  const step2 = () => {
    if (activeStep !== 1) {
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
    if (activeStep !== 2) {
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
      {({handleSubmit, invalid}) => {
        return (
          <form name="homeForm" id="homeForm" onSubmit={handleSubmit}>
            <Stepper activeStep={activeStep} style={{backgroundColor: 'transparent'}}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

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
