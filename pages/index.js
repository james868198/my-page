import React from 'react'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, CardLink, Button } from 'reactstrap'
import { FaFolder, FaGithub } from 'react-icons/fa';

import Layout from '../components/layout'
import { parseDate } from '../utils/parseUtils'
import { assetsPrefix } from '../next.config';

import me from '../me'

const prefix = assetsPrefix + '/'

export default function Home(props) {

  return (
    
    <Layout {...props} media={me.media}>
      <RenderIntroBoard name = {me.name} desc = {me.description}  title = {me.title} />
      <RenderAbout about = {me.about} portrait = {me.portrait} skills = {me.skills} />
      <RenderWorks works = {me.experiences} />
      <RenderProject projects = {me.projects} />
      <RenderContact email = {me.email} contact = {me.contact} />
    </Layout>
  )
}
function RenderIntroBoard({name, desc, title}) {
  if (!name) {
    return(
        <div></div>
    );
  }
  return (
    <React.Fragment>
      <Container className="intro">
        <table style = {{height:  "100%"}}>
          <tbody>
            <tr>
              <td className="align-middle">
                <div className="before-name">Hi! My name is</div>
                <div className="name">{name}.</div>
                <div className="title">{title}</div>
                <div className="description">{desc}</div>              
              </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </React.Fragment>
  )
}
function RenderAbout({about, portrait, skills}) {
  if (!about) {
    return(
        <div></div>
    );
  }
  return (
    <Container id="about" className="about-board">
      <Row>
        <Col md = {{ size: 8, order: 2, offset: 1 }} className='board-title after-line'>
          About Me
        </Col>
      </Row>
      <Row>
        <Col md = {6}>
          <div className="avatar">
            <img src={prefix + portrait} alt="Avatar"></img>
          </div>
        </Col>
        <Col md = {6}>
          
          <Container fluid={true} className="content-container">
            <Row className="content">
              {about}
            </Row>
            <Row className="skill-title">
              The skills I have:
            </Row>
            <Row>
              {skills.map((skill, skillId) => {
                return (
                  <Col md = {4} sm = {4} key={skillId} className="skill">
                    {skill.name}
                  </Col>
                )}
              )}
            </Row>
          </Container>
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
      <Container id="work" className="work-board" > 
        
        <Row>
          <Col md = {{ size: 8, order: 1, offset: 0 }} className='board-title after-line'>
            My Experiences
          </Col>
        </Row>
        <Row className="work-board-inner justify-content-md-center">
          {works.map((work, workId) => {
              return (
                <Col md = {10} key= {workId}>
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
      <Container id="project" className="project-board"> 
        <Row className="justify-content-md-center board-title">
          <Col>Some Things I've Built</Col>
        </Row>
        <Row className="justify-content-md-center">
            {projects.map((project, projectId) => {
              let image = <FaFolder size={50}/>
              let links = <div></div>;
              let tags = <div></div>;

              if (project.image) {
                image = <CardImg top width="100%" src={prefix + project.image} alt="CardImage" />
              }
              if (project.tags) {
                tags = <div className="project-tags">{project.tags.map((tag, projectTagId) => {
                  return (
                    <div className="tag" key={projectTagId}>{tag}</div>
                  )
                })}</div>
              }
              if (project.links) {
                links = <div className="project-links">{project.links.map((link, projectLinkId) => {
                  let linkItem = <div></div>;
                  switch (link.name) {
                    case "demo":
                      linkItem = <Button outline color="secondary" size="sm">Demo</Button>
                      break;
                    case "github":
                      linkItem = <FaGithub size={32}/>
                      break;
                    default:
                      break;
                  }
                  return (
                    <CardLink target="_blank" href={link.link} key={projectLinkId}>{linkItem}</CardLink>
                  )
                })}</div>;                
              }
              
              return (
                <Col lg = {4} md = {10} sm = {10} key={projectId} className="project-container">
                  <Card>
                    
                    <CardBody className="project-image">
                      {image}
                    </CardBody>
                    <CardBody className="project-title">
                      <CardTitle tag="h4">{project.name}</CardTitle>
                      {tags}
                    </CardBody>
                    <CardBody className="project-text">
                      <CardText>{project.description}</CardText>
                      {links}
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
  );
}
function RenderContact({email, contact}) {
  return (
    <Container id="contact" className="contact-board">
      <Row className="justify-content-md-center board-title">
        <Col className="before-line after-line">Get In Touch!</Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="contact-board-content">{contact}</Col>
      </Row>
      <Row className="justify-content-center">
        <Col>My email is:</Col>
      </Row>
      <Row className="justify-content-center contact-board-info">
        <Col className="email">{email}</Col>
      </Row>
    </Container>
  )
}
