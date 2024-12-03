import React from 'react';
import examplePdf from '../assets/pdf-example.pdf';
import rightArrow from '../assets/right-arrow.png';

const PaperViewSection = ({paperDetail}) => {
  return (
    <div>
      <div className='w-fit p-1 *:mx-2 rounded-md flex flex-row mb-6 font-semibold bg-[#EAE7DC] bg-opacity-20 backdrop-blur-sm '>
        <p>{paperDetail && paperDetail.sem}</p>
        <img src={rightArrow} alt='right-arrow' width="20px" height="auto" />
        <p>{paperDetail && paperDetail.pName}</p>
        <img src={rightArrow} alt='right-arrow' width="20px" height="auto" />
        <p>{paperDetail && paperDetail.year}</p>
      </div>
      <div>
        <embed src={examplePdf} width="100%" height="700px" type="application/pdf" />
      </div>
    </div>
  )
}

export default PaperViewSection
