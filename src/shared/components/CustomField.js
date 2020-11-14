import React, { memo } from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDowmIcon from '@material-ui/icons/ThumbDown';
import Typography from '@material-ui/core/Typography';

import Slider from '@/shared/components/Slider';
import TextInput from '@/shared/components/TextInput';
import Dropzone from '@/shared/components/Dropzone';
import Switch from '@/shared/components/Switch';
import {useTranslation} from '@/shared/i18n';

const StyledTextInput = styled(TextInput)`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  margin: 0 15px;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
`;

const SliderLabel = styled(Typography)`
  &&& {
    margin-bottom: ${({ theme }) => theme.size(3)};
  }
`;

const fieldComponentByType = {
  slider: StyledSlider,
  text: StyledTextInput,
  date: StyledTextInput,
  number: StyledTextInput,
  email: StyledTextInput,
  search: StyledTextInput,
  dropZone: Dropzone,
  switch: Switch,
};

const CustomField = (field) => {
  const {t} = useTranslation();
  const FieldComponent = fieldComponentByType[field.type];
  return (
    <Field name={field.name}>
      {({ input, meta }) => {
        if (field.type === 'slider') {
          return (
            <>
              <SliderLabel>
                {t(field.label)}
              </SliderLabel>
              <SliderWrapper>
                <ThumbnailWrapper>
                  <ThumbDowmIcon />
                </ThumbnailWrapper>
                <FieldComponent
                  {...field}
                  value={input.value}
                  onChange={(changeEvent, newValue) => input.onChange(newValue)}
                  valueLabelDisplay="on"
                />
                <ThumbnailWrapper>
                  <ThumbUpIcon />
                </ThumbnailWrapper>
              </SliderWrapper>
            </>
          );
        }

        const hasError = meta.touched && meta.error;
        return (
          <FieldComponent
            {...{ ...field, ...input }}
            label={t(field.label)}
            placeholder={t(field.placeholder)}
            input={input}
            required={field?.validation?.required}
            helperText={hasError && meta.error}
          />
        );
      }}
    </Field>
  );
};

export default memo(CustomField);
