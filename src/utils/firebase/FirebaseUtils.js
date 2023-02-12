// This code imports the necessary modules from Firebase and sets up the configuration for the Firebase app. It also sets up the Google authentication provider and exports the authentication and sign in providers.

// import firebase modules
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCMScRIxp3lKdpvSs88A2j_x-uvnmr4iJE",
  authDomain: "clothing-store-db-e7e25.firebaseapp.com",
  projectId: "clothing-store-db-e7e25",
  storageBucket: "clothing-store-db-e7e25.appspot.com",
  messagingSenderId: "225631987073",
  appId: "1:225631987073:web:8f59f7bb535aede380b480",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

// export auth and signin porviders
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// export db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists() === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
