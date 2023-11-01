import toastHelper from '@/config/helpers/toast.helper';
import { ContactFormType, contactSchema } from '@/config/types/contact.type';
import usePageTitle from '@/hooks/usePageTitle';
import { Button, CircularProgress, TextField } from '@mui/material';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';

const ContactPage = () => {
  usePageTitle('Contact');

  const initialValues: ContactFormType = {
    name: '',
    email: '',
    message: '',
    phone: '',
  };

  const handleSubmit = async (values: ContactFormType, actions: FormikHelpers<ContactFormType>) => {
    try {
      console.log(values);
      // fake wait 1s
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toastHelper.success('Submitted!');
      actions.resetForm();
      actions.setSubmitting(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toastHelper.error(error.message);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="dark:text-white mt-5">
      <h1 className="font-bold text-4xl text-primary text-center">Contact Us</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-4 mt-4 max-w-lg mx-auto">
            <div className="">
              <Field
                name="name"
                as={TextField}
                label="Full name"
                fullWidth
                variant="outlined"
                size="small"
                className="dark:border-white"
              />
              <ErrorMessage name="name" component="span" className="text-primary italic ml-2 text-xs" />
            </div>
            <div className="">
              <Field name="email" as={TextField} label="Email" fullWidth variant="outlined" size="small" type="email" />
              <ErrorMessage name="email" component="span" className="text-primary italic ml-2 text-xs" />
            </div>
            <div className="">
              <Field name="phone" as={TextField} label="Phone" fullWidth variant="outlined" size="small" type="tel" />
              <ErrorMessage name="phone" component="span" className="text-primary italic ml-2 text-xs" />
            </div>
            <div className="">
              <Field
                name="message"
                as={TextField}
                label="Message"
                fullWidth
                variant="outlined"
                size="small"
                multiline
                rows={4}
              />
              <ErrorMessage name="message" component="span" className="text-primary italic ml-2 text-xs" />
            </div>

            <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
              {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactPage;
