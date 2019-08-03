import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id={"sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Mustafa Mossa</span>                
      <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./img/Photo.png" alt=""/>
      </span>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#futureinterests">Future Interests</a>
        </li>
        <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#personalinterests">Personal Interests</a>
        </li>
      </ul>
    </div>
  </nav>

  <div className="container-fluid p-0">

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div className="w-100">
        <h1 className="mb-0"><span style="-webkit-text-stroke-width:2px;-webkit-text-stroke-color:black;">Mustafa</span><span style="color:aqua"> Mossa</span>
        </h1>
        <div className="subheading mb-5" style={"color:white;"}><a href={"mailto:name@email.com"}><strong>mumossa64@hotmail.co.uk</strong></a><br/><br/><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;"><strong>+971528827662<br/>+447919518502</strong></span>                   
          <br/><br/><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;"><strong>Nationality: UK
          <br/>Date Of Birth: 22/05/1990</strong></span>  
        </div>                                                           
        <p className="lead mb-5" style="color:white;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black; font-size:17pt"><strong>Young Developer In Training<br/><br/>Welcome to my site, this is where I'll share info about me and the work I'm currently doing at AstroLabs.</strong></p>
        <div className="row">
            <div className="col-sm-4" style="margin-left:200px; font-size: 22pt; color:aqua" >
                <img src="./img/web-development.png" width={200}/>
                 <br/>
                <strong><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;">Web Development</span></strong>
            </div>
            <div className="col-sm-4" style="font-size:21pt; color:aqua"> 
                    <img src="./img/Software Engineering.png" width={200}/>
                    <br/>
                <strong><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;">Software Engineering</span></strong>
          </div>
    </div><br><br><br>
        <div className="social-icons">                                  
          <a href="https://www.linkedin.com/in/mustafa-mossa-2a628017a/" target="_blank">         <!--Added linkedIn link-->
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/MMGit64?tab=repositories" target="_blank">                  <!--Added github link-->
            <i className="fab fa-github"></i>
          </a>
          <a href="https://about.me/mustafamossa/getstarted" target="_blank">me</a>         <!--Deleted faceobook and twitter icons, replaced with about.me-->
        </div>
      </div>
    </section>
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5"><br><br><br><br>Experience</h2>
        <div className="conatiner">
          <div className="row alig-items-start">
            <div className= "col">
                <img src="./img/HyperionDev.png" width=100>
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
                      <img src="./img/AstroLabs.png" width=200>
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
                 <li>(including Flexbox & CSS Grid)</li> 
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

    <hr color="aqua">

    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
              <div className="conatiner">
                  <div className="row alig-items-start">
                    <div className= "col">
                        <img src="./img/Riga Stradins.jpg" width=150>
                  </div>
                </div>
             </div>
            <h3 className="mb-0">Riga Stradins University, Latvia</h3>
            <div className="subheading mb-3">Diploma</div>
            <div>DDS - Doctor of Dental Surgery</div>
            <p>Grade: 6</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2010 - June 2015</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
          <div className="resume-content">
              <div className="conatiner">
                  <div className="row alig-items-start">
                    <div className= "col">
                        <img src="./img/Rochester.png" width=200>
                  </div>
                </div>
             </div>
            <h3 className="mb-0">Rochester Independant College, UK</h3>
            <div className="subheading mb-3">A-LEVELS</div>
            <div className="container">
              <div className="row align-items-start">
                <div className="col">
                  Chemistry: A
                </div>
                <div className="col">
                  Biology: <br>B
                </div>
                <div className="col">
                  Mathematics: <br>B
                </div>   
          <div className="col">
          <div className="resume-date text-md-right">
            <pre style= "font-size:12pt; color:lightseagreen; font-family:'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'">
              <span className="text-primary">                                                                                   September 2007 - May 2009</span></pre>
          </div>
        </div>
          </div>
        </div>
        </div>

      </div>
    </section>
    <hr color="aqua">
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
              <img src="./img/HTML.png" width=75>
          </li>
          <li className="list-inline-item">
            <img src="./img/css.png" width=75>
          </li>
          <li className="list-inline-item">
              <img src="./img/Python.png" width=150>
          </li>
          <li className="list-inline-item">
              <img src="./img/Java.png" width=50>
          </li>
          <li className="list-inline-item">
              <img src="./img/mysql.png" width=120>
          </li>
          <li className="list-inline-item">
              <img src="./img/Javascript.svg" width=75>
          </li><br>
          <li className="list-inline-item">
            <img src="./img/NodeJS.png" width=100>
          </li>
          <li className="list-inline-item">
            <img src="./img/ReactJS.png" width=100>
          </li>
          <li className="list-inline-item">
            <img src="./img/Expressjs.png" width=150>
          </li>  
          <li className="list-inline-item">
            <img src="./img/Postman.png" width=100>
          </li>  
          <li className="list-inline-item">
            <img src="./img/GitBash.png" width=75>
          </li>      
          <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/mongodb.png">
          </li>
          <li className="list-inline-item">
              <img src="https://img.icons8.com/color/48/000000/heroku.png">
          </li>
        </ul><br><br>
 
    </section>
    <hr color="aqua">
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="futureinterests">
      <div className="w-100">
        <h2 className="mb-5">Future Interests</h2>
        <div className="container">
            <div className="row align-items-start; margin-left:20px">
                <div className="col" style="font-size: 15pt">
                    <img src="./img/Games Development.png" width=300 height=190><br>
                    Games Development
                </div>
                <div className="col" style="font-size: 15pt">
                    <img src="./img/Media Development.jpg" width=300><br>
                    Media Development
                </div>
                <div className="col" style="font-size: 15pt">
                    <img src="./img/Mobile App Development.png" width=400><br>
                    Mobile App Development
                </div>
            </div>
          </div>
        </div>
    </section>
    <hr color="aqua">
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="personalinterests">
        <div className="w-100">
          <h2 className="mb-5">Personal Interests</h2>
          <div className="container">
              <p className="lead mb-5">From a young age I have enjoyed problem solving, with algebra being my strongest academic subject.<br> In my spare time I enjoy playing chess and learning Japanese.
              I am an acitve individual indulging in range of physical/contact sports including gym and martial art practising Judo, Brazilian Jujistu
              and Kickboxing.<br>I generally love to travel, particalurly fond of the far east and always putting considerations in broadening my horizons. </p>
          </div>
      </section>

  <!-- Bootstrap core JavaScript -->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Plugin JavaScript -->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for this template -->
  <script src="js/resume.min.js"></script>
    </div>
  );
}

export default App;
