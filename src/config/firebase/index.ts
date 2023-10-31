// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqIH1_0tH4cDwKXJQnBhFz-l6-_YnvMDc',
  authDomain: 'fer-lab-2c2b5.firebaseapp.com',
  projectId: 'fer-lab-2c2b5',
  storageBucket: 'fer-lab-2c2b5.appspot.com',
  messagingSenderId: '916493715868',
  appId: '1:916493715868:web:c9c717d01362edf757e059',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
