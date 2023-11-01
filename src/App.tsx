import { Route, RouteProps, Routes } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';

import MainLayout from '@/components/layout/MainLayout';
import CustomRouter from '@/config/routes/CustomRouter';
import history from '@/config/routes/history';
import routes from '@/config/routes/routes';
import ThemeProvider from '@/theme/ThemeProvider';

function App() {
  const renderRouter = (routes: RouteProps[]) => {
    return routes.map((route, index) => <Route path={route.path} element={route.element} key={index} />);
  };

  return (
    <ThemeProvider>
      <CustomRouter history={history}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              {renderRouter(routes)}
            </Route>
          </Routes>
        </AuthProvider>
      </CustomRouter>
    </ThemeProvider>
  );
}

export default App;
