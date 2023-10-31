import { auth } from '.';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const authApi = {
  signInByGoogle: async () => {
    return signInWithPopup(auth, googleProvider).then((credential) => {
      return credential.user;
    });
  },
  signOut: async () => {
    return signOut(auth);
  },
};

export default authApi;
