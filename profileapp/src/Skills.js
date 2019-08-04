import React from 'react';
import Experience from './Experience';

const Skills = () => {

    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
  
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
                <img src={"./img/HTML.png"} width='75'/>
            </li>
            <li className="list-inline-item">
              <img src={"./img/css.png"} width='75'/>
            </li>
            <li className="list-inline-item">
                <img src={"./img/Python.png"} width='150'/>
            </li>
            <li className="list-inline-item">
                <img src={"./img/Java.png"} width='50'/>
            </li>
            <li className="list-inline-item">
                <img src={"./img/mysql.png"} width='120'/>
            </li>
            <li className="list-inline-item">
                <img src={"./img/Javascript.svg"} width='75'/>
            </li><br/>
            <li className="list-inline-item">
              <img src={"./img/NodeJS.png"} width='100'/>
            </li>
            <li className="list-inline-item">
              <img src={"./img/ReactJS.png"} width='100'/>
            </li>
            <li className="list-inline-item">
              <img src={"./img/Expressjs.png"} width='150'/>
            </li>  
            <li className="list-inline-item">
              <img src={"./img/Postman.png"} width='100'/>
            </li>  
            <li className="list-inline-item">
              <img src={"./img/GitBash.png"} width='75'/>
            </li>      
            <li className="list-inline-item">
                <img src={"https://img.icons8.com/color/48/000000/mongodb.png"}/>
            </li>
            <li className="list-inline-item">
                <img src={"https://img.icons8.com/color/48/000000/heroku.png"}/>
            </li>
          </ul><br/><br/>
        </div>
      </section>
    )
}

export default Skills;