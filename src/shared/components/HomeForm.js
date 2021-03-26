import React, {memo, useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import {Form} from 'react-final-form';
import styled from 'styled-components';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EuroIcon from '@material-ui/icons/Euro';
import AddBoxIcon from '@material-ui/icons/AddBox';

import * as actions from '@/state/actions';
import CustomField from '@/shared/components/CustomField';
import {useTranslation} from '@/shared/i18n';
import {home, rent} from '@/shared/utils/homeFields';

import CustomControlsButton from './CustomControlsButton';
import CustomButton from './CustomButton';

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: center;
  transform: scale(0.55);
  margin-right: 80px;

`;

const ButtonZone = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  
`;

const FieldWrapper = styled.div`
  margin: ${({theme}) => theme.size(1)} 0;
`;

function getSteps() {
  return ['Location', 'Pricing', 'Features'];
}

const HomeForm = ({onSubmit, initialValues = {}}) => {
  const formType = useSelector(state => state.form);
  let type = null;
  if (formType.home) type = home;
  else type = rent;
  const [wasClicked, setWasClicked] = useState(false);
  const dispatch = useDispatch();
  const isEditMode = initialValues.id;
  const {t} = useTranslation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  useEffect(() => {
    return async () => {
      await dispatch(actions.removeAllTempImages());
    };
  }, [dispatch]);

  const onSubmitNewHomeValidation = (entries) => {
    const errors = {};

    type.forEach(field => {
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

        <CustomControlsButton
          onClick={(e) => {
            e.preventDefault();
            handleBack();
          }}
        >

          Prev
        </CustomControlsButton>

      );
    }
    return null;
  };

  const nextButton = () => {
    if (activeStep < 2) {
      return (

        <CustomControlsButton
          onClick={(e) => {
            e.preventDefault();
            handleNext();
          }}
        >
          Next
        </CustomControlsButton>

      );
    }
    return null;
  };

  const step1 = () => {
    if (activeStep !== 0) {
      return null;
    }
    return type.map((field, index) => {
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
      return false;
    });
  };

  const step2 = () => {
    if (activeStep !== 1) {
      return null;
    }
    return type.map((field, index) => {
      if (index >= 5 && index < 10) {
        return (
          <FieldWrapper key={field.name}>
            <CustomField {...field} />
          </FieldWrapper>
        );
      }
      return false;
    });
  };

  const step3 = (invalid) => {
    if (activeStep !== 2) {
      return null;
    }
    const fieldZone = type.map((field, index) => {
      if (index >= 10 && index < 20) {
        return (
          <FieldWrapper key={field.name}>
            <CustomField {...field} />
          </FieldWrapper>
        );
      }
      return false;
    });
    return (
      <>
        {fieldZone}
        <SubmitWrapper>
          <CustomButton
            type="submit"
            checked={wasClicked}
            disabled={invalid}
            onClick={
              () => {
                setWasClicked(true);
              }
            }
          >{t(isEditMode ? 'edit_home' : 'add_new_home')}
          </CustomButton>
        </SubmitWrapper>
      </>
    );
  };

  const ColorlibStepIcon = (props) => {
    const classes = useColorlibStepIconStyles();
    const {active, completed, icon} = props;

    const icons = {
      1: <LocationCityIcon />,
      2: <EuroIcon />,
      3: <AddBoxIcon />,
    };

    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(icon)]}
      </div>
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
            <Stepper alternativeLabel activeStep={activeStep} style={{backgroundColor: 'transparent'}} connector={<ColorlibConnector />}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}>
                      {label}
                    </StepLabel>
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

HomeForm.propTypes = {
  active: PropTypes.string,
  completed: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default memo(HomeForm);
