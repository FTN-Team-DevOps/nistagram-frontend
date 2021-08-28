import React, { FunctionComponent, useCallback } from 'react';
import { useForm, FormProvider, useFieldArray } from 'react-hook-form';
import { Box, Button, FormControlLabel, FormHelperText, Grid, Switch } from '@material-ui/core';
import { FormTextInput } from '../../common/form/inputs/TextInput';
import { useRequiredValidation } from '../../../../utils/form/validation.utils';
import { IPublicationFormProps } from './types';
import { useSelectWithParams } from '../../../../utils/selector.utils';
import { apiSelectors } from '../../../../app/api/api.selectors';

export const PublicationForm: FunctionComponent<IPublicationFormProps> = ({ onSubmit }) => {
  const formProps = useForm();
  const requiredValidation = useRequiredValidation();
  const { fields, append, remove } = useFieldArray<{ picture: string }>({
    control: formProps.control,
    name: 'pictures',
  });

  const error = useSelectWithParams(apiSelectors.selectApiError, 'createPublication');

  const addPicture = useCallback(() => {
    append({});
    formProps.clearErrors('pictures');
  }, [append, formProps]);

  const removePicture = useCallback(
    (index) => {
      if (fields.length > 1) {
        remove(index);
      } else {
        formProps.setError('pictures', { type: 'minLength', message: 'You need to add at least one picture' });
      }
    },
    [fields.length, formProps, remove],
  );

  const handleSubmit = useCallback(
    (data) => {
      onSubmit({
        ...data,
        pictures: data.pictures.map((tupple: { picture: string }) => tupple.picture),
        publicationType: data.publicationType ? 'post' : 'story',
      });
    },
    [onSubmit],
  );

  return (
    <FormProvider {...formProps}>
      <form id="publication-form" onSubmit={formProps.handleSubmit(handleSubmit)}>
        <Box style={{ marginBottom: '15px' }}>
          <Grid container>
            <FormTextInput
              name={`pictures[0].picture`}
              label="Picture"
              defaultValue={''}
              validation={requiredValidation}
            />
          </Grid>
        </Box>
        {fields.map((field, index) => (
          <Box key={`pictures[${index + 1}]`} style={{ marginBottom: '15px' }}>
            <Grid container>
              <FormTextInput
                name={`pictures[${index + 1}].picture`}
                label="Picture"
                defaultValue={''}
                validation={requiredValidation}
              />
              <Button onClick={() => removePicture(index + 1)} color="secondary" variant="contained">
                Remove picture
              </Button>
            </Grid>
          </Box>
        ))}
        <Button onClick={addPicture} color="primary" variant="contained">
          Add Picture
        </Button>
        <FormTextInput
          name="description"
          label="Description"
          defaultValue=""
          validation={requiredValidation}
          multiline={3}
        />
        <FormControlLabel control={<Switch name="publicationType" color="primary" />} label="Post / Story" />
        {error && <FormHelperText error>{error.message}</FormHelperText>}
      </form>
    </FormProvider>
  );
};
