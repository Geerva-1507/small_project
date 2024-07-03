import { initializeApp } from 'firebase/app'
import {addDoc, getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCKBbQ3HTDTdFaw-pvim3eEh6mLvbFV5BM",
    authDomain: "react-firebase-todo-7270c.firebaseapp.com",
    projectId: "react-firebase-todo-7270c",
    storageBucket: "react-firebase-todo-7270c.appspot.com",
    messagingSenderId: "520167562470",
    appId: "1:520167562470:web:7a24651689bfebbc056f27",
    measurementId: "G-6SVMS8KFM5"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  // const analytics = getAnalytics(firebaseApp);

  async function loginUsingEmailAndPassword(email, password) {
    try{
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
      console.log(error);
    }
  }

  async function registerUsingEmailAndPassword(name, email, password) {
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } 
    catch(error){
      console.log(error);  
    }
  }

function logout() {
  signOut(auth);
}    

export {
  auth,
  loginUsingEmailAndPassword,
  registerUsingEmailAndPassword,
  logout
};