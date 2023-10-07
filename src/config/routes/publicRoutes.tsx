import { RouteProps } from 'react-router-dom';

import ComingSoon from '@/pages/exception/ComingSoon';
import NotFound from '@/pages/exception/NotFound';
import FilmDetailPage from '@/pages/film/FilmDetailPage';
import FilmPage from '@/pages/film/FilmPage';
import AboutPage from '@/pages/main/AboutPage';
import ContactPage from '@/pages/main/ContactPage';
import HomePage from '@/pages/main/HomePage';
import NewsPage from '@/pages/main/NewsPage';

const publicRoutes: RouteProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/film',
    element: <FilmPage />,
  },
  {
    path: '/film/:id',
    element: <FilmDetailPage />,
  },
  {
    path: '/coming-soon',
    element: <ComingSoon />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default publicRoutes;
