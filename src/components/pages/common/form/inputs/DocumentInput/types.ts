import { ChangeEvent } from 'react';
export interface IFormDocumentInputProps {
  name: string;
  previewUrl?: string;
  tooltip: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
