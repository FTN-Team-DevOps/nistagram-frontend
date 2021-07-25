import React, { FunctionComponent, useCallback, useState, ChangeEvent } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormControlLabel, FormHelperText, Switch } from '@material-ui/core';
import { FormTextInput } from '../../common/form/inputs/TextInput';
import { useRequiredValidation } from '../../../../utils/form/validation.utils';
import { IUserFormProps } from './types';
import { useSelectWithParams } from '../../../../utils/selector.utils';
import { apiSelectors } from '../../../../app/api/api.selectors';
import { DocumentInput } from '../../common/form/inputs/DocumentInput';
import { FormSelectInput } from '../../common/form/inputs/SelectInput';

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

export const UserForm: FunctionComponent<IUserFormProps> = ({ onSubmit }) => {
  const formProps = useForm();
  const requiredValidation = useRequiredValidation();

  const [picture, setPicture] = useState<File | null>(null);
  const [picturePreview, setPicturePreview] = useState('');

  const error = useSelectWithParams(apiSelectors.selectApiError, 'createUser');

  const handlePictureChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files && event.currentTarget.files[0]) {
      setPicture(event.currentTarget.files[0]);
      setPicturePreview(URL.createObjectURL(event.currentTarget.files[0]));
    }
  }, []);

  const handleSubmit = useCallback(
    (data) => {
      console.log('test', data, picture);
    },
    [picture],
  );

  return (
    <FormProvider {...formProps}>
      <form id="user-form" onSubmit={formProps.handleSubmit(handleSubmit)}>
        <DocumentInput
          previewUrl={picturePreview}
          tooltip="Profile picture"
          name="picture"
          onChange={handlePictureChange}
        />
        <FormTextInput name="username" label="Username" defaultValue="" validation={requiredValidation} />
        <FormTextInput
          name="password"
          label="Password"
          defaultValue=""
          type="password"
          validation={requiredValidation}
        />
        <FormTextInput name="email" label="Email" defaultValue="" validation={requiredValidation} />
        <FormTextInput name="name" label="Name" defaultValue="" validation={requiredValidation} />
        <FormTextInput
          name="biography"
          label="Biography"
          defaultValue=""
          validation={requiredValidation}
          multiline={3}
        />
        <FormTextInput name="phone" label="Phone" defaultValue="" validation={requiredValidation} />
        <FormSelectInput
          name="gender"
          label="Gender"
          defaultValue=""
          validation={requiredValidation}
          options={genders}
        />
        <FormTextInput name="siteUrl" label="Site Url" defaultValue="" validation={requiredValidation} />

        <FormControlLabel control={<Switch name="private" color="primary" />} label="Private" />
        <FormControlLabel control={<Switch name="taggable" color="primary" />} label="Taggable" />

        {/* <FormControlLabel control={<Switch name="isAgent" color="primary" />} label="Agent" /> */}
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </form>
    </FormProvider>
  );
};
