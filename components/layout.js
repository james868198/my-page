import React from 'react'
// import Router from 'next/router'
import Head from 'next/head'
import { FaReact } from 'react-icons/fa';
import {ThemeProvider} from 'styled-components';
import Media from './media'
import MyNav from './nav'

// import {lightTheme, darkTheme} from '../styles/Theme';
import {GlobalStyles} from '../styles/GlobalStyles'
import { assetsPrefix } from '../next.config';
const prefix = assetsPrefix + '/'

const lightTheme = {
    body: '#ffffff',
    text: '#000000',
    card: '#d6d6d6',
    bodyColor1: '#c4c4c4',
    bodyColor2: '#d6d6d6',
    textColor1: '#424242',
    textColor2: '#616161',
    iconColor1: '#424242',
    iconColor2: '#616161',
    lineColor1: '#424242',
    lineColor2: '#616161'
}

const darkTheme = {
    body: '#000000',
    text: '#ffffff',
    card: '#474747',
    bodyColor1: '#424242',
    bodyColor2: '#616161',
    textColor1: '#c4c4c4',
    textColor2: '#a1a1a1',
    iconColor1: '#c4c4c4',
    iconColor2: '#a1a1a1',
    lineColor1: '#c4c4c4',
    lineColor2: '#a1a1a1'
}
class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.switchTheme = this.switchTheme.bind(this);
        this.state = {
            theme: lightTheme
        }
    }
    toggleMediaBar() {
        this.setState({
            isMediaBarOpen: !this.state.isMediaBarOpen
        });
    }
    switchTheme(newTheme) {
        let defaultTheme = this.state.theme
        if (newTheme === 'light') {
            defaultTheme = lightTheme; 
        } else if (newTheme === 'dark') {
            defaultTheme = darkTheme; 
        }
        this.setState({
            theme: defaultTheme
        });
    }
    
    
    render() {
        return (
            <ThemeProvider theme={this.state.theme}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <title>{this.props.title || 'My-Page'}</title>
                    {/* <style dangerouslySetInnerHTML={{__html: styles}}/> */}  

                </Head>
                <GlobalStyles />
                <div id="main" className="main" onScroll={this.props.handleScroll}>
                    <MyNav prefix = {prefix} switchTheme={this.switchTheme} />
                    {this.props.children}
                    <div className="footer">
                        <h5>My-Page v1. Made with <FaReact/> ReactJS</h5>
                    </div>
                </div>
                <Media media={this.props.media} />
                <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
            </ThemeProvider>
        )
    }
}

export default Layout;