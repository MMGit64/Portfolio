import React from './react';

const Education = () => {


    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
          <h2 className="mb-5">Education</h2>
  
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <div className="conatiner">
                    <div className="row alig-items-start">
                      <div className= "col">
                          <img src={"./img/Riga Stradins.jpg"} width='150'/>
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
                          <img src={"./img/Rochester.png"} width='200'/>
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
                    Biology: <br/>B
                  </div>
                  <div className="col">
                    Mathematics: <br/>B
                  </div>   
            <div className="col">
            <div className="resume-date text-md-right">
              <pre style= {{"font-size:12pt; color:lightseagreen; font-family:'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"}}>
                <span className="text-primary">                                                                                   
                September 2007 - May 2009</span></pre>
            </div>
          </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    )
}

export default Education;