import api from '.';

import { AxiosRequestConfig } from 'axios';

const filmApi = {
  getFilms: (config?: AxiosRequestConfig) => {
    return api.get('/', config);
  },
};

export default filmApi;
