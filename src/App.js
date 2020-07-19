import React, {Component} from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import './App.css';
import JumbotronContainer from './components/Jumbotron';
import NavbarContainer from './components/Navbar';
import EducationContainer from './components/Education';
import SkillsTagCloudContainer from "./components/SkillsTagCloud";
import ProjectContainer from './components/Projects';
import ResumeDetails from './Resume.json';
import AboutContainer from './components/About';
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer/>
        <JumbotronContainer personalInfo={ResumeDetails.personalInfo}/>
        <Grid>
          <Row className="about-row">
            <AboutContainer personalInfo={ResumeDetails.personalInfo}/>
          </Row>
          <Row className="main-row">
            <Col s={12} md={12} lg={6}>
              <EducationContainer education={ResumeDetails.education}/>
            </Col>
            <Col s={12} md={12} lg={6}>
              <SkillsTagCloudContainer skills={ResumeDetails.skills}/>
            </Col>
          </Row>
          <Row className="project-row">
            <ProjectContainer projects={ResumeDetails.projects}/>
          </Row>
        </Grid>
        <Footer/>
      </div>
    );
  }
}

export default App;
