import React, { useEffect, useState } from 'react'
import PaperSelectSidebar from '../components/PaperSelectSidebar'
import PaperViewSection from '../components/PaperViewSection'

const Course = () => {
  const [paperDetail, setPaperDetail] = useState();

  const getPaperDetail = (paperDetail) =>{
    setPaperDetail({...paperDetail});
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [])

  return (
    <div className='flex flex-row justify-evenly m-14 '>
      <div>
        <PaperSelectSidebar getPaperDetail = {getPaperDetail} />
      </div>
      <div className='w-screen ml-16 md:w-11/12'>
        <PaperViewSection paperDetail = {paperDetail} />
      </div>
    </div>
  )
}

export default Course
