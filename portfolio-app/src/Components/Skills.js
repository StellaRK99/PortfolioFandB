import React from 'react'
import JS from '../Public/Images/js-logo.png';
import RE from '../Public/Images/react-logo.png'; 
import CS from '../Public/Images/csharp-logo.png';
import TS from '../Public/Images/ts-logo.png';
import HT from '../Public/Images/html-logo.png';
import CSS from '../Public/Images/css-logo.png';
import AWS from '../Public/Images/aws-logo.png';
import ND from '../Public/Images/node-logo.png';
import SQL from '../Public/Images/sql-logo.png';
import AZ from '../Public/Images/azure-logo.png';
import GIT from '../Public/Images/github-logo.png';
import '../Public/styles/styles.css';


function Skills() {
  return (
    <div className="skills">
        <div className="skills-content">
        <img src={JS} alt="js-logo"></img>
        <img src={TS} alt="ts-logo"></img>
        <img src={RE} alt="react-logo"></img>
        <img src={HT} alt="html-logo"></img>
        <img src={CSS} alt="css-logo"></img>
        <img src={CS} alt="csharp-logo"></img>
        <img src={ND} alt="node-logo"></img>
        <img src={SQL} alt="sql-logo"></img>
        <img src={AWS} alt="aws-logo"></img>
        <img src={GIT} alt="git-logo"></img>
        <img src={AZ} alt="azure-logo"></img>
        </div>
    </div>
  )
}

export default Skills