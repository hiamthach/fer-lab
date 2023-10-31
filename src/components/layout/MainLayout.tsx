import { Outlet } from 'react-router-dom';

import Footer from './Footer';
// import Footer from './Footer';
import Header from './Header';

const MainLayout = () => {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Header />
      <div className="flex-1 w-full max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
