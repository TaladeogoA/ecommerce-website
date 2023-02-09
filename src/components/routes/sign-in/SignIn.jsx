import {
  googlePopupSignIn,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/FirebaseUtils";

const SignIn = () => {
  const handleSignInWithGoogle = async () => {
    const { user } = await googlePopupSignIn();
    console.log("user", user);
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SignIn Component</h1>
      <button onClick={handleSignInWithGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
