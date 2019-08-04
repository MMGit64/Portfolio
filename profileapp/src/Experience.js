import React from './react';

const Experience = () => {

    return(
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5"><br/><br/><br/><br/>Experience</h2>
        <div className="conatiner">
          <div className="row alig-items-start">
            <div className= "col">
                <img src="./img/HyperionDev.png" width="100"/>
            </div>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">HyperionDev</h3>                                                     
            <div className="subheading mb-3">Online Software Engineering Bootcamp</div>
            <div className="container">
              <div className="row align-items-start">
              <div className="col">
                Level 1:
            <ul>
              <li>Python</li>
              <li>Algorithm Building</li>
              <li>Control Structures</li>
              <li>Data Structures</li>
              <li>Data Types</li>
              <li>Functions</li>
              <li>Strings</li>
            </ul>
            </div>
            <div className="col">
                Level 2:
            <ul>
              <li>Object Oriented Programming</li>
              <li>Agile Development</li>
              <li>Software Engineering best practices and tools</li>
              <li>Git control</li>
              <li>Software Testing</li>
              <li>Refactoring</li>
              <li>Documentation practices</li>
            </ul>
            </div>
            <div className="col">
              Level 3:
            <ul> 
              <li>Architecture</li>
              <li>design</li> 
              <li>Database Programming</li>
              <li>Advanced Algorithms</li>
              <li>Machine Learning</li>
              <li>SciKit</li>
              <li>Unit tests</li>
              <li>Concurrency</li>
              <li>Interfaces</li>
            </ul>
           </div>
           <div className="col">
               <div className="resume-date text-md-right">
            <span className="text-primary">October 2018 - January 2019</span>
          </div>         
          </div> 
          </div>
          </div>
        </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
              <div className="conatiner">
                <div className="row alig-items-start">
                  <div className= "col">
                      <img src="./img/AstroLabs.png" width="200"/>
                </div>
              </div>
           </div>
            <h3 className="mb-0">Astrolabs Coding Bootcamp Academy, Dubai UAE</h3>
            <div className="subheading mb-3">Fullstack Web Development Bootcamp</div>
            <p>Bootcamp course covering:
              <ul>
                <li>Domains</li>
                <li> Basics of WordPress</li> 
                 <li>HTML</li>
                 <li>(including Flexbox &amp; CSS Grid)</li> 
                 <li>Atomic Design Principles, How To Build an MVP (Minimum Viable Prototype)</li>
                 <li>JavaScript (basic algorithms)</li>
                 <li>Node JS </li>
                 <li>MongoDB</li>
                 <li>Mongoose</li>
                 <li>Webpack</li>
                 <li>Git</li>
                 <li>React JS</li>
                 <li>Basics of React Native </li>
              </ul>
              </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2019 - Present</span>
          </div>
        </div>

      </div>

    </section>

    
    )
}


export default Experience;