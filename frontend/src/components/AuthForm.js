import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import googleLogo from '../assets/google-logo.png'
import app from '../firebase/firebase.js'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();  

const AuthForm = ({setSignedIn}) => {
  const [showSignIn, setShowSignIn] = useState(true);
  const navigate = useNavigate();

  const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const createUser = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password).then(value => {
        alert("success");
        setSignedIn(true);
        navigate('/'); // Redirect to home page
      });
    };


    return (
      <div
        class=""
      >
        <form
          class="flex flex-col *:mb-4 *:p-2 *:rounded-lg *:border-2 *:border-[#EAE7DC]"
        >
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' required placeholder='email id' />
          <input type='text' placeholder='full name' />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='enter password' />
          <input onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (password === e.target.value) {
              setError("");
            }
          }} value={confirmPassword} type='password' placeholder='confirm password' />
          {error && <p class="text-red-500">{error}</p>}
          <button onClick={createUser} type='submit'
            class="text-center w-fit mb-1 bg-[#E98074] hover:bg-[#E85A4F] border-none rounded-xl">
            Sign Up
          </button>
        </form>
        <div
          class='text-right mb-4 -mt-2'
        >
          <p>
            Already have an account?
            <button
              class="text-[#3C00FF]"
              onClick={() => setShowSignIn(true)}>Sign In</button>
          </p>
        </div>
      </div>
    )
  };

  const SignInForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const signinUser = (e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password).then(value => {
        alert("signin success");
        setSignedIn(true);
        navigate('/'); // Redirect to home page
      }).catch(error => setError("invalid credentials"));
    }

    return (
      <div>
        <form
          class="flex flex-col *:mb-4 *:p-2 *:rounded-lg *:border-2 *:border-[#EAE7DC]"
        >
          <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='email id' />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder='enter password' />
          {error && <p class="text-red-500">{error}</p>}
          <button onClick={signinUser} type='submit' class="text-center w-fit mb-2 bg-[#E98074] hover:bg-[#E85A4F] border-none rounded-xl">Sign In</button>
        </form>
        <div class='text-right mb-4 -mt-2'>
          <p>
            Don't have an account?
            <button class="text-[#3C00FF]" onClick={() => setShowSignIn(false)}>Sign Up</button>
          </p>
        </div>
      </div>
    )
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      // Handle successful sign-in
      alert("Google sign-in successful");
      setSignedIn(true);
      navigate('/'); // Redirect to home page
    })
 };

  return (
    <div
      class="flex flex-col m-10"
    >
      <div>
        <p
          class="text-xl font-bold mb-2">
          Sign in to access all the features.
        </p>
      </div>
      <div
        class="flex justify-evenly mb-5"
      >
        <button
          class={`w-20 pl-3 pr-3 pb-1 pt-1 rounded-3xl bg-[#D8C3A5] hover:bg-[#E98074] ${showSignIn && 'bg-[#E85A4F]'}`}
          onClick={() => setShowSignIn(true)}>Sign In</button>
        <button
          class={`w-20 pl-3 pr-3 pb-1 pt-1 rounded-3xl bg-[#D8C3A5] hover:bg-[#E98074] ${!showSignIn && 'bg-[#E85A4F]'}`}
          onClick={() => setShowSignIn(false)}>Sign Up</button>
      </div>
      <div>
        {showSignIn === true ? <SignInForm /> : <SignUpForm />}
      </div>
      <div>
        <button onClick={signupWithGoogle} class="w-full flex flex-row justify-evenly p-2 rounded-lg border-2 border-[#8E8D8A]">
          <p>Continue with Google</p>
          <img src={googleLogo} alt='Google logo' width="30px" height="auto" />
        </button>
      </div>
    </div>
  )
}

export default AuthForm
