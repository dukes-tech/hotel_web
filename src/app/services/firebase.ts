import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmGl88v2VCXlNF3z2BaQCk-KAr7TT_SrE",
  authDomain: "crud-web-1012a.firebaseapp.com",
  projectId: "crud-web-1012a",
  storageBucket: "crud-web-1012a.firebasestorage.app",
  messagingSenderId: "595735169854",
  appId: "1:595735169854:web:51f7bebac065b9273fba6f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

getDoc(doc(db, 'hotel', '101'))
  .then(resultado => {
    console.log('PRUEBA FIREBASE:', resultado.exists(), resultado.data());
  })
  .catch(error => {
    console.error('ERROR FIREBASE:', error);
  });