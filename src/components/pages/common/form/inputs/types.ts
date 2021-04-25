import { ValidationRules } from 'react-hook-form';
import { ReactElement } from 'react';

export interface IFormInputProps {
  name: string;
  label: string;
  defaultValue?: string | null;
  validation?: ValidationRules;
  leftIcon?: ReactElement | null;
  rightIcon?: ReactElement | null;
  disabled?: boolean;
}
