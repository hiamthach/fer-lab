import * as yup from 'yup';

export type Film = {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  nation: string;
  youtubeUrl: string;
};

export type FilmFormType = {
  title: string;
  description: string;
  image: string;
  year: number;
  nation: string;
  youtubeUrl: string;
};

export const filmFormSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  image: yup.string().required('Image is required'),
  year: yup.number().required('Year is required').min(1900).max(2024),
  nation: yup.string().required('Nation is required'),
  youtubeUrl: yup.string().required('YoutubeUrl is required'),
});
