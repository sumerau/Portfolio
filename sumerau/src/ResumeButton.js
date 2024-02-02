import React, { useRef } from 'react';
import { saveAs } from 'file-saver';
import ResumeLocation from './files/resume.pdf';

const ResumeButton = () => {
  const  dialogRef = useRef(null);

  const handleButtonClick = () => {
    dialogRef.current.showModal();
  };
  
  const handleDownloadClick = () => {
    // Logic to initiate download (e.g., using FileSaver.js)
    // For simplicity, it's assumed the resume file is a PDF.
    saveAs({ResumeLocation});
    window.open(ResumeLocation, '_blank');
  };

  const handleEmailClick = () => {
    // Logic to initiate an email (e.g., using the 'mailto:' link)
    const emailSubject = encodeURIComponent('Sumerau Resume');
    const emailBody = encodeURIComponent('Attached is the resume of Jessie Sumerau.');
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleCloseDialog = () => {
    dialogRef.current.close();
  }

  return (
    <div>
        <button onClick={handleButtonClick}>View Resume</button>
        
        <dialog ref={dialogRef}>
            {/* Display the resume or embed a PDF viewer here */}
            <iframe title="Resume" src={ResumeLocation} width="100%" height="600px" />

            {/* Download and Email buttons */}
            <button onClick={handleDownloadClick}>Download Resume</button>
            <button onClick={handleEmailClick}>Email Resume</button>

            {/* Close button */}
            <button onClick={handleCloseDialog}>Close</button>
        </dialog>
    </div>
  );
};

export default ResumeButton;
