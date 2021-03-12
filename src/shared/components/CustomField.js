import React, {memo} from 'react';

import styled from 'styled-components';
import {Field} from 'react-final-form';
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
  label {
   margin-left: 30px;
    font-size: 20px;
    display: inline-block;
    margin-bottom: 80px;
  }

  input {
    outline: none;
    display: block;
    width: 100%;
    margin: 30px;
    padding: 20px 40px;
    border: 1px solid #d9d9d9;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    color: #837E7E;
    font-family: "Roboto";
    -webkti-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transition: all 0.3s linear 0s;
    -moz-transition: all 0.3s linear 0s;
    -ms-transition: all 0.3s linear 0s;
    -o-transition: all 0.3s linear 0s;
    transition: all 0.3s linear 0s;
    &:focus {
      color: #333333;
      border: 1px solid #7B1FA2;
    }
  }
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
    margin-bottom: ${({theme}) => theme.size(3)};
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

const CustomField = field => {
  const {t} = useTranslation();
  const FieldComponent = fieldComponentByType[field.type];

  return (
    <Field name={field.name}>
      {({input, meta}) => {
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
            {...{...field, ...input}}
            label={t(field.label)}
            placeholder={t(field.placeholder)}
            input={input}
            required={field?.validation?.required}
            helperText={hasError && meta.error}
            InputProps={{disableUnderline: true}}
          />
        );
      }}
    </Field>
  );
};

export default memo(CustomField);
