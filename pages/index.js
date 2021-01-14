import React from 'react'
import { useState, useRef, useEffect } from 'react'

import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, CardLink, Button } from 'reactstrap'
import { FaFolder, FaGithub } from 'react-icons/fa';
import { Fade, Stagger } from 'react-animation-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Layout from '../components/layout'
import { parseDate } from '../utils/parseUtils'
import { assetsPrefix } from '../next.config';

import me from '../me'

const prefix = assetsPrefix + '/';


export default function Home(props) {
  const [scrollTop, setScrollTop] = useState(0);
  const [aboutIn, setAboutIn] = useState(0);
  const [workIn, setWorkIn] = useState(0);
  const [projectIn, setProjectIn] = useState(0);
  const [contactIn, setContactIn] = useState(0);

  function handleScroll() {
    const element = document.getElementById("main");
    // console.log('layout handleScroll', element.scrollTop);
    setScrollTop(element.scrollTop);
  }

  useEffect(() => {
    let height = -200;
    let el = document.getElementById("intro");
    if (el.offsetHeight) {
      height = height + el.offsetHeight;
      setAboutIn(height);
      // console.log('height:',height);
    }
    el = document.getElementById("about");
    if (el.offsetHeight) {
      height = height + el.offsetHeight;
      setWorkIn(height);
      // console.log('height:',height);
    }
    el = document.getElementById("work");
    if (el.offsetHeight) {
      height = height + el.offsetHeight;
      setProjectIn(height);
      // console.log('height:',height);
    }
    el = document.getElementById("project");
    if (el.offsetHeight) {
      height = height + el.offsetHeight;
      setContactIn(height);
      // console.log('height:',height);
    }
    
  },[]);
  
  return (
    <Layout {...props} media={me.media} >
      <div id="main" style={{position: "relative", height:"100%", overflow:"scroll"}} onScroll = {handleScroll}>
        <RenderIntroBoard  name = {me.name} desc = {me.description}  title = {me.title} />
        <RenderAbout show={scrollTop>=aboutIn} about = {me.about} portrait = {me.portrait} skills = {me.skills} />
        <RenderWorks show={scrollTop>=workIn} works = {me.experiences} />
        <RenderProject show={scrollTop>=projectIn} projects = {me.projects} />
        <RenderContact show={scrollTop>=contactIn} email = {me.email} contact = {me.contact} />
      </div>
    </Layout>
  )
}
function RenderIntroBoard({name, desc, title}) {
  return (
    <React.Fragment>
      <Stagger in>
        <Container id="intro" className="intro">  
          <table style = {{height:  "100%"}}>
            <tbody>
              <tr>
                <td className="align-middle">
                
                  <div className="before-name">Hi! My name is</div>
                  <Fade in duration={1000}><div className="name">{name}.</div></Fade>
                  <Fade in duration={2000}><div className="title">{title}</div></Fade>
                  <Fade in duration={2000}><div className="description">{desc}</div></Fade>           
                </td>
              </tr>
            </tbody>
          </table>
        </Container>
      </Stagger>
    </React.Fragment>
  )
}
function RenderAbout({about, portrait, skills, show}) {
  return (
    <CSSTransition key="about-title" in={show} timeout={2000} classNames="fade-in">
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
    </CSSTransition>

  )
}

function RenderWorks({works, show}) {
  if (!works) {
      return(
          <div></div>
      );
  }
  return (
    <CSSTransition in={show} timeout={2000} classNames="fade-in">
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
    </CSSTransition>
  );
}
function RenderProject({projects, show}) {
  if (!projects) {
      return(
          <div></div>
      );
  }
  return (
    <CSSTransition in={show} timeout={2000} classNames="fade-in">
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
    </CSSTransition>
  );
}
function RenderContact({email, contact,show}) {
  return (
    <CSSTransition in={show} timeout={2000} classNames="fade-in">
      <Container id="contact" className="contact-board">
        <Row className="justify-content-md-center board-title">
          <Col className="before-line after-line">Get In Touch!</Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="contact-board-content">{contact}</Col>
        </Row>
        <Row className="justify-content-center contact-board-info">
          <Col className="email">
            <a href={'mailto:' + email} ><Button outline color="secondary" size="lg" >Say Hello!</Button></a>  
          </Col>
        </Row>
      </Container>
    </CSSTransition>
  )
}
