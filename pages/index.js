import React, { useState, useEffect }  from 'react';

import Layout from '../components/layout';
import { assetsPrefix } from '../next.config';
import me from '../me'

import Intro from '../components/sections/intro';
import About from '../components/sections/about';
import Works from '../components/sections/works';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

const prefix = assetsPrefix + '/';

export default function Home(props) {
  const [scrollTop, setScrollTop] = useState(0);
  // const [scrollDir, setScrollDir] = useState('down');
  const [aboutIn, setAboutIn] = useState(0);
  const [workIn, setWorkIn] = useState(0);
  const [projectIn, setProjectIn] = useState(0);
  const [contactIn, setContactIn] = useState(0);

  function handleScroll() {
    const element = document.getElementById("main");
    // console.log('layout handleScroll', element.scrollTop, scrollTop);
    // if (element.scrollTop > scrollTop && scrollDir !== 'down' ) {
    //   setScrollDir('down');
    // } 
    // if (element.scrollTop < scrollTop && scrollDir !== 'up' ) {
    //   setScrollDir('up');
    // }
    setScrollTop(element.scrollTop);
  }

  function handleShow(height) {
    return scrollTop>=height;
  }

  useEffect(() => {
    let height = -300;
    let el = document.getElementById("intro");
    if (el.offsetHeight) {
      height = height + el.offsetHeight;
      setAboutIn(height);
      console.log('height:',height);
    }
    el = document.getElementById("about");
    if (el.offsetHeight) {
      height = height + el.offsetHeight;
      setWorkIn(height);
      console.log('height:',height);
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
    <Layout {...props} media={me.media} handleScroll = {handleScroll} >
      <Intro  name = {me.name} desc = {me.description}  title = {me.title} />
      <About show={handleShow(aboutIn)} about = {me.about} portrait = {me.portrait} skills = {me.skills} prefix = {prefix} />
      <Works show={handleShow(workIn)} works = {me.experiences} />
      <Projects show={handleShow(projectIn)} projects = {me.projects} prefix = {prefix}/>
      <Contact show={handleShow(contactIn)} email = {me.email} contact = {me.contact}/>
    </Layout>
  )
}


