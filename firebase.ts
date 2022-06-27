// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD2UUsOVQueBmrUXgC92pzEOMFL6UGxBlM",
//   authDomain: "netflix-clone-practice-9c083.firebaseapp.com",
//   projectId: "netflix-clone-practice-9c083",
//   storageBucket: "netflix-clone-practice-9c083.appspot.com",
//   messagingSenderId: "846501781819",
//   appId: "1:846501781819:web:e849991ea2b2507958571e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//이게 파이어베이스 싸이트에서 제공되는 코드인데, 밑의 코드로 바꿔서 사용 : 초기화하는 코드들인건데, 초기화가 이미 되어있으면 중복으로 하지 않기 위해서
//넥스트js에서 사용할때 주의할 점임

// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD2UUsOVQueBmrUXgC92pzEOMFL6UGxBlM',
  authDomain: 'netflix-clone-practice-9c083.firebaseapp.com',
  projectId: 'netflix-clone-practice-9c083',
  storageBucket: 'netflix-clone-practice-9c083.appspot.com',
  messagingSenderId: '846501781819',
  appId: '1:846501781819:web:e849991ea2b2507958571e',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // 이 코드는 초기화 안되어있으면 초기화하고, 되어있으면 그냥 가져오는거
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
