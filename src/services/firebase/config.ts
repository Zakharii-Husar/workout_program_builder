// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAp2F2XILd2flkO-tgiK_penbA_pXZ_1EE',
  authDomain: 'workoutbuilder-a79d2.firebaseapp.com',
  projectId: 'workoutbuilder-a79d2',
  storageBucket: 'workoutbuilder-a79d2.firebasestorage.app',
  messagingSenderId: '539571492411',
  appId: '1:539571492411:web:85569df80ea8eb4274ae1e',
  measurementId: 'G-MSH1NX1H93',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics (only in browser)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Initialize Firebase Auth
export const auth = getAuth(app);

