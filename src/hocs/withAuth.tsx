import React from 'react';
import { Navigate } from 'react-router-dom';

import AuthConsumer from '@/hooks/useAuth';

// Create HOC for protected routes with a Page component wrapped by this HOC
export const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const Wrapper: React.FC<P> = (props) => {
    const { isAuth } = AuthConsumer();

    // Render the wrapped component if authenticated
    return isAuth ? <WrappedComponent {...props} /> : <Navigate to="/" />;
  };

  // Set the display name for the wrapped component for better debugging experience
  Wrapper.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return Wrapper;
};
