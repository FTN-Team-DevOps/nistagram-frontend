import React, { FunctionComponent, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

import { IFormTextInputProps } from './types';
import { useInputClasses } from '../styles';

import { get } from 'lodash';

export const FormTextInput: FunctionComponent<IFormTextInputProps> = ({
  name,
  label,
  defaultValue,
  type,
  multiline,
  placeholder,
  leftIcon,
  rightIcon,
  validation,
  disabled,
}) => {
  const classes = useInputClasses();
  const { control, errors, setValue } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [defaultValue, name, setValue]);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={validation}
      render={(controllerProps) => (
        <TextField
          label={label}
          fullWidth
          type={type}
          placeholder={placeholder}
          multiline={!!multiline}
          rows={multiline}
          color="primary"
          className={classes.input}
          error={!!get(errors, name, false)}
          helperText={get(errors, `${name}.message`)}
          // InputProps={inputProps}
          {...controllerProps}
          disabled={disabled}
        />
      )}
    />
  );
};
