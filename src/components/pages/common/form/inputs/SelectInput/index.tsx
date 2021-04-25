import React, { FunctionComponent, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, MenuItem } from '@material-ui/core';
import { useInputClasses } from '../styles';
import { IFormSelectInputProps } from './types';

import { get } from 'lodash';

export const FormSelectInput: FunctionComponent<IFormSelectInputProps> = ({
  name,
  label,
  options,
  defaultValue,
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
          select
          fullWidth
          color="primary"
          className={classes.input}
          error={!!get(errors, name, false)}
          helperText={get(errors, `${name}.message`)}
          // InputProps={inputProps}
          {...controllerProps}
          disabled={disabled}
        >
          {options.map((option) => (
            <MenuItem key={`${name}-option-value-${option.value}`} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};
