import FilmPage from '../film/FilmPage';

import usePageTitle from '@/hooks/usePageTitle';

const HomePage = () => {
  usePageTitle('Home');

  return <FilmPage />;
};

export default HomePage;
