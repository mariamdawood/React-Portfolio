// /src/components/Project/index.jsx
import React from 'react';
import { removeHyphensAndCapitalize } from '../../utils/helpers';
import projects from '../../assets/index'; // Import the projects object

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={projects[name]} // Use the imported projects object
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;