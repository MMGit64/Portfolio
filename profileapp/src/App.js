import React from 'react';
import logo from './logo.svg';
import NavBar from './NavBar';
import './App.css';
import PersonalInfo from './Personalnfo';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Future from './Future';
import Personal from './Personal';
import Bootstrap from './Bootstrap';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      
      <NavBar/>

      <div class="container-fluid p-0"></div>

      <PersonalInfo/>

      <Experience/>

      <hr color="aqua"/>

      <Education/>

      <hr color="aqua"/>

      <Skills/>

      <hr color="aqua"/>

      <Future />

      <hr color="aqua"/>

      <Personal/>

      <Bootstrap/>

    </div>
  );
}

export default App;
