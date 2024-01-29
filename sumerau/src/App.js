import React, { useState } from 'react';
import Linkedin_Logo from './images/linkedin_icon_full.png';
import Github_Logo from './images/github_icon.png';
import './App.css';

const projectsData = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description of Project 1.',
    details: 'Detailed information about Project 1.',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of Project 2.',
    details: 'Detailed information about Project 2.',
  },
  // Add more projects as needed
];

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jessie Sumerau</h1>
        <p>Developer/Programmer</p>
      </header>
      <section className="Projects">
        <h2>Projects</h2>
        <div className='Project-container'>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`Project ${selectedProject === project.id ? 'selected' : ''}`}
              onClick={() => handleProjectClick(project.id)}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {selectedProject === project.id && <p className="Details">{project.details}</p>}
            </div>
          ))}
        </div>
      </section>
      <footer className="App-footer">
        <a href="https://www.linkedin.com/in/jessie-sumerau/" target="_blank" rel='noreferrer'>
          <img src={Linkedin_Logo} alt="Linkedin" className='App-logo'/>
        </a>
        <a href="https://github.com/sumerau" target="_blank" rel='noreferrer'>
          <img src={Github_Logo} alt="Github" className='App-logo'/>
        </a>
      </footer>
    </div>
  );
}

export default App;
