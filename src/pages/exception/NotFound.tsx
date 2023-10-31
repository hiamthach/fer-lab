import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

const NotFound = () => {
  return (
    <div className="flex w-full h-full items-center justify-center relative">
      <img src="/notfound.svg" alt="not found" className="w-auto h-auto" />

      <Link to="/" className="absolute left-1/2 -translate-x-1/2 bottom-1/2">
        <Button size="large" variant="outlined">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
