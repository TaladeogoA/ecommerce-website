// Description: This file contains the functions that are used to interact with the firebase database.

// import firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

// initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

// initialize firestore
const provider = new GoogleAuthProvider();

// set custom parameters
provider.setCustomParameters({ prompt: "select_account" });

// export functions
export const auth = getAuth();
export const googlePopupSignIn = () => signInWithPopup(auth, provider);

// export database
export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);
  console.log(userDocRef);

  const userDocSnapshot = await getDoc(userDocRef);
  console.log(userDocSnapshot);

  if (userDocSnapshot.exists() === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error creating user document", error.message);
    }
  }

  return userDocRef;
};
