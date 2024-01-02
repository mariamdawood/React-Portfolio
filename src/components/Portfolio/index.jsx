// /src/components/Portfolio/index.jsx
import React from 'react';
import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'MelodyMapper',
      description: 'JavaScript',
      link: "https://pgold762.github.io/MelodyMapper",
      repo: "https://github.com/PGold762/MelodyMapper"
    },
    {
      name: 'Cultured Cuisine',
      description: 'Handlebars/CSS',
      link: "https://culturedcuisine-59da43e6096e.herokuapp.com/",
      repo: "https://github.com/PGold762/CulturedCuisine"
    },
    {
      name: 'To Be Frank',
      description: 'React/CSS',
      link: "https://to-be-frank-9e501319d50a.herokuapp.com/",
      repo: "https://github.com/mstrnes2/to-be-frank"
    },
    {
      name: 'Code Quiz',
      description: 'HTML/CSS/JavaScript',
      link: "https://mariamdawood.github.io/Code-Quiz/",
      repo: "https://github.com/mariamdawood/Code-Quiz"
    },
    {
      name: 'Weather Dashboard',
      description: 'jQuery',
      link: "https://mariamdawood.github.io/Weather-Dashboard/",
      repo: "https://github.com/mariamdawood/Weather-Dashboard"
    },
    {
      name: 'Tech Blog',
      description: 'MySQL/Sequelize/Express.js',
      link: "https://tech-blog-by-mariam-ac876a5d1ff9.herokuapp.com/",
      repo: "https://github.com/mariamdawood/Tech-Blog"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={`project${idx}`} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;