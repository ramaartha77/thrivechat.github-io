import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, query, where, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGJzMfUMEWsGqFfQGqUT3Dmdrdoa4wdWw',
  authDomain: 'thrive-chat-1e02c.firebaseapp.com',
  projectId: 'thrive-chat-1e02c',
  storageBucket: 'thrive-chat-1e02c.appspot.com',
  messagingSenderId: '354792245189',
  appId: '1:354792245189:web:f7190f9d97ddcb5badadac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
