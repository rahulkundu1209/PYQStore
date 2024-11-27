import React, { useState } from 'react'
import googleLogo from '../assets/google-logo.png'

const AuthForm = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  const SignUpForm = () => {
    return (
      <div
        class=""
      >
        <form
          class="flex flex-col *:mb-4 *:p-2 *:rounded-lg *:border-2 *:border-[#EAE7DC]"
        >
          <input type='email' placeholder='email id' />
          <input type='text' placeholder='full name' />
          <input type='password' placeholder='enter password' />
          <input type='email' placeholder='confirm password' />
          <button
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
    return (
      <div>
        <form
          class="flex flex-col *:mb-4 *:p-2 *:rounded-lg *:border-2 *:border-[#EAE7DC]"
        >
          <input type='email' placeholder='email id' />
          <input type='password' placeholder='enter password' />
          <button class="text-center w-fit mb-2 bg-[#E98074] hover:bg-[#E85A4F] border-none rounded-xl">Sign In</button>
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
        <button class="w-full flex flex-row justify-evenly p-2 rounded-lg border-2 border-[#EAE7DC]">
          <p>Continue with Google</p>
          <img src={googleLogo} alt='Google logo' width="30px" height="auto" />
        </button>
      </div>
    </div>
  )
}

export default AuthForm
