import React from 'react';
import examplePdf from '../assets/pdf-example.pdf'

const PaperViewSection = () => {
  return (
    <div>
      <div>
        <p>Semester-1 </p>
        <p>Paper-1 </p>
        <p>2023</p>
      </div>
      <div>
        <embed src={examplePdf} width="100%" height="600px" type="application/pdf" />
      </div>
    </div>
  )
}

export default PaperViewSection
