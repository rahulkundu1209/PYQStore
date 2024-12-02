import React from 'react'
import PaperSelectSidebar from '../components/PaperSelectSidebar'
import PaperViewSection from '../components/PaperViewSection'

const Course = () => {
  return (
    <div className='flex flex-row items-center justify-evenly m-14 '>
      <div>
        <PaperSelectSidebar/>
      </div>
      <div className='w-screen ml-16 md:w-11/12'>
        <PaperViewSection/>
      </div>
    </div>
  )
}

export default Course
