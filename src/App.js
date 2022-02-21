import React from "react";
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import PersonalInfo from './components/PersonalInfo';
import Profile from './components/ProfileSummary';
import OJT from './components/OJT';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Seminars from './components/Seminars';
import Certificates from './components/Certificates';
import Affiliations from './components/Affiliations';
import CharRef from './components/CharRef';

class App extends React.Component{
  render(){
      return(
          <div className="container p-5>">
            <div className="row">
                <div className="col-4 text-white py-4 px-5" style={{backgroundColor: "#4E86AA"}}>
                    <About />
                    <hr style={{height: 4}}></hr>
                    <PersonalInfo />
                    <Contact />
                </div>
                <div className="col-8 bg-light text-dark py-4 px-5">
                    <Profile />
                    <OJT />
                    <Education />
                    <Skills />
                    <Projects />
                    <Seminars />
                    <Certificates />
                    <Affiliations />
                    <CharRef />
                </div>
            </div>
          </div>
      )
  }
}
export default App;
