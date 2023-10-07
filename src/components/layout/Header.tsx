import { Link, useLocation } from 'react-router-dom';

import useDarkMode from '@/hooks/useDarkMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Brightness6Icon from '@mui/icons-material/Brightness6';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, IconButton } from '@mui/material';

const links = [
  {
    id: 'home',
    name: 'Home',
    route: '/',
  },
  {
    id: 'news',
    name: 'News',
    route: '/news',
  },
  {
    id: 'about',
    name: 'About',
    route: '/about',
  },
  {
    id: 'contact',
    name: 'Contact',
    route: '/contact',
  },
];

const Header = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { pathname } = useLocation();

  return (
    <nav className="w-full dark:bg-black shadow-sm py-2 items-center">
      <div className="max-w-7xl mx-auto flex justify-between">
        <ul className="flex gap-6">
          {links.map((item) => {
            const isActive = pathname === item.route;
            return (
              <li key={item.id} className={`dark:text-white cursor-pointer`}>
                <Link to={item.route}>
                  <Button variant={isActive ? 'contained' : 'text'}>{item.name}</Button>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="" onClick={toggleDarkMode}>
          <IconButton size="small">
            {darkMode ? <LightModeIcon className="text-primary" /> : <DarkModeIcon className="text-primary" />}
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
