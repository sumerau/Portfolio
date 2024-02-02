import React, { useState } from 'react';
import AlertNotification from './alert/AlertNotification';
import ResumeButton from './ResumeButton';

import Linkedin_Logo from './images/linkedin_icon_full.png';
import Github_Logo from './images/github_icon.png';
import './App.css';

const projectsData = [
  {
    id: 1,
    title: 'WALK A MILE IN MY SHOES',
    link: 'https://we-r-wor.com',
    description: 'Company Website Redesign.',
    details: 'As part of a duo team, I revamped and enhanced the overall user experience of the website. The project intent was aimed at optimizing navigation, improving visual appeal, and ensuring a more streamlined and user-friendly interface. Actively a moderator and maintainer of the website.',
  },
  {
    id: 2,
    title: 'SUMMER-AWE',
    description: 'Personal Brand Project',
    details: 'I created and developed this website with two things in mind: reducing my student loan debt, and reshaping how we interact with each other online.',
  },
  // Add more projects as needed
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message, type });
  };

  const closeAlert = () => {
    setAlert(null);
  };

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jessie Sumerau</h1>
        <p>Software Developer</p>
      </header>
      <section className="Projects">
        <h2>Projects</h2>
        <div className='Project-container'>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`Project-${selectedProject === project.id ? 'selected' : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {selectedProject === project.id && <p className="Details">{project.details}</p>}
              {selectedProject === project.id && <a href={project.link} target= '_blank' rel= 'noreferrer'><p className="Link">{project.title}</p></a>}
            </div>
          ))}
        </div>
      </section>
      <footer className="App-footer">
        <div>
          <a href="https://www.linkedin.com/in/jessie-sumerau/" target='_blank' rel='noreferrer'>
            <img src={Linkedin_Logo} alt="Linkedin" className='App-logo'/>
          </a>
          <a href="https://github.com/sumerau" target='_blank' rel='noreferrer'>
            <img src={Github_Logo} alt="Github" className='App-logo'/>
          </a>
        </div>

        <ResumeButton />
        
      </footer>

      {alert && (
        <AlertNotification
          message={alert.message}
          type={alert.type}
          onClose={closeAlert}
        />
      )} 
    </div>
  );
}

export default App;
