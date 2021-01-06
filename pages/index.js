import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem  } from 'reactstrap'

import Layout from '../components/layout'
import {parseDate} from '../utils/parseUtils'

import me from '../me'

const prefix = "/my-page"

export default function Home(props) {

  return (
    
    <Layout {...props}>
      <RenderIntroBoard name = {me.name} desc = {me.description} />
      <RenderAbout about = {me.about} portrait = {me.portrait} />
      <RenderWorks works = {me.experiences} />
      <RenderProject projects = {me.projects} />
      <RenderContact email = {me.email} contact = {me.contact} />
    </Layout>
  )
}
function RenderIntroBoard({name, desc}) {
  if (!name) {
    return(
        <div></div>
    );
  }
  return (
    <Container className="board-type-full">
      <Row>
        <Col id="home" md = {12}>
            <h1>{name}</h1>
        </Col>
        <Col md = {12}>
            <p>{desc}</p>
        </Col>
      </Row>
    </Container>
  )
}
function RenderAbout({about, portrait}) {
  if (!about) {
    return(
        <div></div>
    );
  }
  return (
    <Container id="about" className="board-type-1">
      <Row>
        <Col md = {12}>
          <h1>About me</h1>
        </Col>
        <Col md = {6}>
          <p>{about}</p>
        </Col>
        <Col md = {6}>
            <img className ="portrait" src={prefix + portrait} alt="head portrait"></img>
        </Col>
      </Row>
    </Container>
  )
}
function RenderWorks({works}) {
  if (!works) {
      return(
          <div></div>
      );
  }
  return (
      <Container id="work" className="board-type-1" > 
        <Row className="justify-content-md-center">
          <Col md = {12}>
              <h1>My Experiences</h1>
          </Col>
          
          {works.map((work, workId) => {
              return (
                <React.Fragment key={workId}>   
                  <Col md = {11}>
                    <h4>{work.title} - {work.institution}</h4>
                    <h6>{parseDate(work.start)} - {parseDate(work.end)}</h6>
                    <ul className="work-detail">
                        {work.description.map((desc, descId) => {
                          return (
                            <li key={descId}>{desc}</li>
                          )})
                        }
                    </ul>
                  </Col>
                </React.Fragment>
              );
          })}
        </Row>
      </Container>
  );
}

function RenderProject({projects}) {
  if (!projects) {
      return(
          <div></div>
      );
  }
  return (
      <Container id="project" className="board-type-1">   
        <Row className="justify-content-md-center">
          <Col md = {12}>
              <h1>Some Things I've Built</h1>
          </Col>
          
          {projects.map((project, projectId) => {
            return (
              <React.Fragment key={projectId}>   
                <Col md = {10}>
                  <a href={project.link}> <h4>{project.name}</h4></a>
                  <p>{project.description}</p>
                </Col>
                <Col md = {10}>

                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
  );
}

function RenderContact({email, contact}) {
  return (
    <Container id="contact" className="board-type-full contact-container">
      <Row className="justify-content-md-center">
        <Col md = {6}>
            <h1>Get In Touch!</h1>
            <p>{contact} </p>
            My email is:
            <h4>{email}</h4>
        </Col>
      </Row>
    </Container>
  )
}
