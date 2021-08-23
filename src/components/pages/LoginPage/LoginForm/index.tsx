import React, { FunctionComponent, useEffect, useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { FormHelperText } from '@material-ui/core';
import { FormTextInput } from '../../common/form/inputs/TextInput';
import { useRequiredValidation } from '../../../../utils/form/validation.utils';
import { ILoginFormProps } from './types';
import { useSelectWithParams } from '../../../../utils/selector.utils';
import { apiSelectors } from '../../../../app/api/api.selectors';
import { clearApiError } from '../../../../app/api/api.actions';
import { useDispatch } from 'react-redux';

export const LoginForm: FunctionComponent<ILoginFormProps> = ({ onSubmit }) => {
  const passwordReset = useRef(false);
  const formProps = useForm();
  const requiredValidation = useRequiredValidation();
  const dispatch = useDispatch();

  const error = useSelectWithParams(apiSelectors.selectApiError, 'login');

  useEffect(() => {
    if (error && !passwordReset.current) {
      formProps.reset({
        email: formProps.getValues().email,
        password: '',
      });
      passwordReset.current = true;
    }
  }, [dispatch, error, formProps]);

  useEffect(() => {
    if (error && !formProps.formState.isSubmitted && formProps.formState.isDirty) {
      dispatch(clearApiError('login'));
      passwordReset.current = false;
    }
  }, [dispatch, error, formProps.formState.isDirty, formProps.formState.isSubmitted]);

  return (
    <FormProvider {...formProps}>
      <form id="login-form" onSubmit={formProps.handleSubmit(onSubmit)}>
        <FormTextInput name="email" label="Email" defaultValue="" validation={requiredValidation} />
        <FormTextInput
          name="password"
          label="Password"
          defaultValue=""
          type="password"
          validation={requiredValidation}
        />
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </form>
    </FormProvider>
  );
};
