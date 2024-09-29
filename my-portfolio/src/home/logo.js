import React from 'react';

// Example imports if you use SVG files or static files
import pythonIcon from '../files/python.svg';
import githubIcon from '../files/github.svg';
import awsIcon from '../files/aws.svg';
import htmlIcon from '../files/html.svg';
import jsIcon from '../files/js.svg';
import latexIcon from '../files/latex.svg';
import rIcon from '../files/r-studio.svg';
import sqlIcon from '../files/sql.svg';


const IconList = () => {
  return (
    <div className="icon-list">
      <img src={latexIcon} alt="LaTeX" className="icon" />
      <img src={sqlIcon} alt="SQL" className="icon" />
      <img src={awsIcon} alt="AWS" className="icon" />
      <img src={rIcon} alt="R" className="icon" />
      <img src={pythonIcon} alt="Python" className="icon" />
      <img src={githubIcon} alt="GitHub" className="icon" />
      <img src={jsIcon} alt="JavaScript" className="icon" />
      <img src={htmlIcon} alt="HTML5" className="icon" />
    </div>
  );
};

export default IconList;