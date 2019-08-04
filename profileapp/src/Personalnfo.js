import React from './react';

const PersonalInfo = () => {
    
    return(
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
          <h1 class="mb-0"><span style="-webkit-text-stroke-width:2px;-webkit-text-stroke-color:black;">Mustafa</span><span style="color:aqua"> Mossa</span>
          </h1>
          <div class="subheading mb-5" style="color:white;"><a href="mailto:name@email.com"><strong>mumossa64@hotmail.co.uk</strong></a><br/><br/><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;"><strong>+971528827662<br/>+447919518502</strong></span>                   
            <br/><br/><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;"><strong>Nationality: UK
            <br/>Date Of Birth: 22/05/1990</strong></span>  
          </div>                                                           
          <p class="lead mb-5" style="color:white;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black; font-size:17pt"><strong>Young Developer In Training<br/><br/>Welcome to my site, this is where I'll share info about me and the work I'm currently doing at AstroLabs.</strong></p>
          <div class="row">
              <div class="col-sm-4" style="margin-left:200px; font-size: 22pt; color:aqua" >
                  <img src="./img/web-development.png" width="200"/>
                   <br/>
                  <strong><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;">Web Development</span></strong>
              </div>
              <div class="col-sm-4" style="font-size:21pt; color:aqua"> 
                      <img src="./img/Software Engineering.png" width="200"/>
                      <br/>
                  <strong><span style="-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;">Software Engineering</span></strong>
            </div>
      </div><br/><br/><br/>
          <div class="social-icons">                                  
            <a href="https://www.linkedin.com/in/mustafa-mossa-2a628017a/" target="_blank">         
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/MMGit64?tab=repositories" target="_blank">                  
              <i class="fab fa-github"></i>
            </a>
            <a href="https://about.me/mustafamossa/getstarted" target="_blank">me</a>         
          </div>
        </div>
      </section>
    )
}


export default PersonalInfo;