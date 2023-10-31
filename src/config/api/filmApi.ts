import api from '.';
import { FilmFormType } from '../types/film.type';

import { AxiosRequestConfig } from 'axios';

const filmApi = {
  getFilms: (config?: AxiosRequestConfig) => {
    return api.get('/', config);
  },
  getFilm: (id: string, config?: AxiosRequestConfig) => {
    return api.get(`/${id}`, config);
  },
  createFilm: (data: FilmFormType, config?: AxiosRequestConfig) => {
    return api.post('/', data, config);
  },
  updateFilm: (id: string, data: FilmFormType, config?: AxiosRequestConfig) => {
    return api.put(`/${id}`, data, config);
  },
  deleteFilm: (id: string, config?: AxiosRequestConfig) => {
    return api.delete(`/${id}`, config);
  },
};

export default filmApi;
