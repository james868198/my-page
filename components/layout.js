import React from 'react'
// import Router from 'next/router'
import Head from 'next/head'
import { Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
         Navbar, NavbarToggler, NavbarBrand, DropdownMenu,DropdownItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import { FaLinkedin, FaReact, FaGithubSquare, FaArrowUp } from 'react-icons/fa';
import { assetsPrefix } from '../next.config';
const prefix = assetsPrefix + '/'

class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isNavOpen: false
            // isModalOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleMediaBar() {
        this.setState({
            isMediaBarOpen: !this.state.isMediaBarOpen
        });
    }
    
    // toggleModal() {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen
    //     });
    // }
    
    render() {
        const mediaBar = (!this.props.media) ? <div></div> : <div className="social-media">
            <ul className="social-media-container">
                <li className="arrow">
                    <FaArrowUp size={32}/>
                </li>
                {this.props.media.map((media, mediaId) => {
                    let mediaItem = <div></div>;
                    switch (media.name) {
                      case "linkedin":
                        mediaItem = <a href={media.link} target="_blank"><FaLinkedin size={32}/></a>
                        break;
                      case "github":
                        mediaItem = <a href={media.link} target="_blank"><FaGithubSquare size={32}/></a>
                        break;
                      default:
                        break;
                    }
                    return (
                    <li className="social-media-icon" key={mediaId}>
                        {mediaItem}
                    </li>
                    )}
                )}
            </ul>
        </div>

        return (
            <React.Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>{this.props.title || 'My-Page'}</title>
                    {/* <style dangerouslySetInnerHTML={{__html: styles}}/> */}
                    

                </Head>
                
                <div className="main">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href={prefix}>My-Page</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="#about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#work">Work</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#project">Project</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Navbar>
                    {this.props.children}
                    <div className="footer">
                        <h5>My-Page v1. Made with <FaReact/> ReactJS</h5>
                    </div>
                </div>
                {mediaBar}
            <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
            </React.Fragment>
        )
    }
}

export default Layout;