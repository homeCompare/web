import React, {memo} from 'react';
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
              {fields.map(field => (
                <FieldWrapper key={field.name}>
                  <CustomField {...field} />
                </FieldWrapper>
              ))}
              <StyledButton type="submit" disabled={invalid}>{t(isEditMode ? 'add_new_home' : 'edit_home')}</StyledButton>
            </FormWrapper>
          </form>
        );
      }}
    </Form>
  );
};

export default memo(HomeForm);
