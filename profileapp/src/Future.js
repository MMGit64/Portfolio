import React from './react';

const Future = () => {
    return(
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="futureinterests">
        <div className="w-100">
          <h2 className="mb-5">Future Interests</h2>
          <div className="container">
              <div className="row align-items-start; margin-left:20px">
                  <div className="col" style={{fontSize: '15pt'}}>
                      <img src={"./img/Games Development.png"} width='300' height='190'/><br/>
                      Games Development
                  </div>
                  <div className="col" style={{fontSize: '15pt'}}>
                      <img src={"./img/Media Development.jpg"} width='300'/><br/>
                      Media Development
                  </div>
                  <div className="col" style={{fontSize: '15pt'}}>
                      <img src={"./img/Mobile App Development.png"} width='400'/><br/>
                      Mobile App Development
                  </div>
              </div>
            </div>
          </div>
      </section>
    )
}

export default Future;