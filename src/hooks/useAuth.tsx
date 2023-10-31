import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/config/firebase';
import authApi from '@/config/firebase/auth';
import toastHelper from '@/config/helpers/toast.helper';
import { User } from 'firebase/auth';

interface IAuthValue {
  isAuth: boolean;
  loading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signIn(): Promise<User | any>;
  signOut(): Promise<void>;
  currentUser: User | null;
}

interface IAuthProvider {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const { signInByGoogle, signOut } = authApi;

export const AuthContext = React.createContext<IAuthValue>({
  isAuth: false,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
  currentUser: null,
});

function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        setIsAuth(true);
        setLoading(false);
      } else {
        setIsAuth(false);
        setCurrentUser(null);
        setLoading(false);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values: IAuthValue = {
    isAuth,
    loading,
    async signIn() {
      try {
        const user = await signInByGoogle();
        if (user.email) {
          toastHelper.success(`Welcome ${user.displayName}`);
          navigate('/');
        }

        return user;
      } catch (err) {
        return err;
      }
    },
    async signOut() {
      try {
        signOut();
        setIsAuth(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        toastHelper.error(err.message);
      }
    },
    currentUser,
  };

  return values;
}

export function AuthProvider({ children }: IAuthProvider) {
  const auth: IAuthValue = useAuth();

  return <AuthContext.Provider value={auth}>{!auth.loading ? children : null}</AuthContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(AuthContext);
}
