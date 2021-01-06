import React from 'react'
// import Router from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col, Nav, NavItem, Button, Form, NavLink, Collapse,
         Navbar, NavbarToggler, NavbarBrand, DropdownMenu,DropdownItem, UncontrolledDropdown, DropdownToggle } from 'reactstrap'
import { FaLinkedin, FaReact, FaGithubSquare } from 'react-icons/fa';

// import styles from '../styles/index.scss'

const prefix = "/my-page/"
class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        
        return (
            <React.Fragment>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>{this.props.title || 'My-Blog'}</title>
                    {/* <style dangerouslySetInnerHTML={{__html: styles}}/> */}
                </Head>
                
                <div className="main">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href={prefix}>My-Blog</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.isNavOpen} navbar>
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
                            
                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                    Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                    Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                    Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                        </Collapse>
                    </Navbar>
                    {this.props.children}
                    <div className="footer">
                        <h5>My-Blog v1, Made with <FaReact/> ReactJS</h5>
                    </div>
                </div>
                <div className="social-media">
                    <ul className="social-media-container">
                        <li className="social-media-icon">
                            <a><FaLinkedin size={32}/></a>
                        </li>
                        <li className="social-media-icon">
                            <a><FaGithubSquare size={32}/></a>
                        </li>
                    </ul>
                </div>

            </React.Fragment>
        )
    }
}

export default Layout;