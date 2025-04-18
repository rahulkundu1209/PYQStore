import React from 'react'
import WelcomeSection from './WelcomeSection'
import AuthForm from './AuthForm'

const AuthSection = () => {
  return (
    <div 
      class="
      m-10
      flex 
      flex-col
      md:flex-row
      bg-[#EAE7DC]
      bg-opacity-20
      backdrop-blur-sm
      shadow-inner-custom
      rounded-[40px]"
    >
        <WelcomeSection />
        <AuthForm/>
    </div>
  )
}

export default AuthSection
