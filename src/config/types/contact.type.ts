import * as yup from 'yup';

export type ContactFormType = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const contactSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required(),
  message: yup.string(),
});
