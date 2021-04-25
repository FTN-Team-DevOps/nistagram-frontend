import { IFormInputProps } from '../types';

export interface IFormTextInputProps extends IFormInputProps {
  type?: 'number' | 'password' | 'hidden';
  multiline?: number;
  placeholder?: string;
}
