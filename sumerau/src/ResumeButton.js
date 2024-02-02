import React from 'react';
import ResumeLocation from './files/resume.pdf';

const ResumeButton = () => {

  const handleButtonClick = () => {
    window.open(ResumeLocation, '_blank');
  };

  return (
    <div className='Button'>
        <button  onClick={handleButtonClick}>View Resume</button>
    </div>
  );
};

export default ResumeButton;
