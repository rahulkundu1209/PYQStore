import React from 'react';
import welcomeGraphic from '../assets/welcome-graphic.png'

const WelcomeSection = () => {
  return (
    <div
      class="
        p-10 pt-10
        bg-[#8E8D8A]
        bg-opacity-20
        backdrop-blur-sm
        rounded-[40px]
      "
    >
      <p class="text-5xl font-bold mb-5">
        Welcome 
        <span class="text-[#E85A4F]"> Learner!</span>
      </p>
      <p class="text-center text-xl">
        The more you sweat in practice, <br /> 
        <span>the less you bleed in battle.</span>
      </p>
      <img src={welcomeGraphic} alt="boy-reading" height="auto" width="400px" />
    </div>
  )
}

export default WelcomeSection
