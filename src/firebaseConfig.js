// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDue0pZohIyBKeR5-XL07mmiaO41-6aLlc',
	authDomain: 'registrack-14c1e.firebaseapp.com',
	projectId: 'registrack-14c1e',
	storageBucket: 'registrack-14c1e.firebasestorage.app',
	messagingSenderId: '1079839203089',
	appId: '1:1079839203089:web:6c196deb368a06c92e36b0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
