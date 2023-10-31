import { FilmFormType, filmFormSchema } from '@/config/types/film.type';
import { Button, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

const FilmForm = () => {
  const initialValues: FilmFormType = {
    title: '',
    description: '',
    image: '',
    year: 0,
    nation: '',
    youtubeUrl: '',
  };

  const handleSubmit = (values: FilmFormType, actions: FormikHelpers<FilmFormType>) => {
    // Handle form submission here
    console.log(values);

    // Reset form
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={filmFormSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-3">
          <div className="">
            <Field name="title" as={TextField} label="Title" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="title" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          <div className="">
            <Field name="description" as={TextField} label="Description" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="description" component="span" className="text-primary italic ml-2 text-xs" />
          </div>
          <div className="">
            <Field name="image" as={TextField} label="Image" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="image" component="span" className="text-primary italic ml-2 text-xs" />
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
            <Field name="youtubeUrl" as={TextField} label="YouTube URL" fullWidth variant="outlined" size="small" />
            <ErrorMessage name="youtubeUrl" component="span" className="text-primary italic ml-2 text-xs" />
          </div>

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FilmForm;
