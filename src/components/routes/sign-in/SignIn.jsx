import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/FirebaseUtils";
import SignUpForm from "../../sign-up-form/SignUpForm";

const SignIn = () => {
  // sign in handler
  const handleSignInWithGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Component</h1>
      <button onClick={handleSignInWithGooglePopup}>
        Sign In with Google Popup
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
