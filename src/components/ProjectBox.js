// ProjectBox.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBox = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="project-box">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Link>
  );
};

export default ProjectBox;
