import { IFormInputProps } from '../types';

export interface IFormSelectInputProps extends IFormInputProps {
  options: { label: string; value: string }[];
}
