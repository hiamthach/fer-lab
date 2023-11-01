import YoutubeViewer from '@/components/shared/YoutubeViewer';
import filmApi from '@/config/api/filmApi';
import stringHelper from '@/config/helpers/string.helper';
import toastHelper from '@/config/helpers/toast.helper';
import { Film, FilmFormType, filmFormSchema } from '@/config/types/film.type';
import { Button, CircularProgress, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

interface Props {
  refetch: () => void;
  handleClose: () => void;
  isEdit: boolean;
  defaultValue?: Film;
}

const FilmForm = ({ refetch, handleClose, isEdit, defaultValue }: Props) => {
  const initialValues: FilmFormType = {
    title: defaultValue?.title || '',
    description: defaultValue?.description || '',
    image: defaultValue?.image || '',
    year: defaultValue?.year || 0,
    nation: defaultValue?.nation || '',
    youtubeUrl: defaultValue?.youtubeUrl || '',
  };

  const handleSubmit = async (values: FilmFormType, actions: FormikHelpers<FilmFormType>) => {
    // Call API
    try {
      if (isEdit) {
        await filmApi.updateFilm(defaultValue?.id as string, values);
      } else {
        await filmApi.createFilm(values);
      }
      toastHelper.success('Create film successfully!');
      // Close modal
      handleClose();
      refetch();
      // Reset form
      actions.resetForm();
      actions.setSubmitting(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toastHelper.error(error.message);
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={filmFormSchema} onSubmit={handleSubmit}>
      {({ isSubmitting, values }) => (
        <Form className="flex flex-col gap-3">
          <div className="">
            <Field name="title" as={TextField} label="Title" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="title" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          <div className="">
            <Field name="year" as={TextField} label="Year" fullWidth variant="outlined" size="small" type="number" />
            <ErrorMessage name="year" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          <div className="">
            <Field name="nation" as={TextField} label="Nation" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="nation" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          <div className="">
            <Field
              name="description"
              as={TextField}
              label="Description"
              fullWidth
              variant="outlined"
              size="small"
              multiline
              rows={4}
            />
            <ErrorMessage name="description" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          <div className="">
            <Field name="image" as={TextField} label="Image" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="image" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          {values.image && <img src={values.image} alt="preview image" className="w-full h-auto" />}
          <div className="">
            <Field name="youtubeUrl" as={TextField} label="YouTube URL" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="youtubeUrl" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          {values.youtubeUrl && (
            <>
              <YoutubeViewer url={stringHelper.convertToEmbedYoutube(values.youtubeUrl)} />
            </>
          )}

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilmForm;
