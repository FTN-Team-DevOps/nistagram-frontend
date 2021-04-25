import React, { FunctionComponent, useEffect } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { Controller, useFormContext } from 'react-hook-form';

import { IFormDateInputProps } from './types';
import { useInputClasses } from '../styles';

import { get } from 'lodash';
import { FORMAT_DATE } from '../../../../../../utils/date.utils';

export const FormDateInput: FunctionComponent<IFormDateInputProps> = ({
  name,
  label,
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
        <DatePicker
          label={label}
          fullWidth
          color="primary"
          format={FORMAT_DATE}
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
