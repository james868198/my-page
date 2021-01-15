import { Container, Row, Col } from 'reactstrap'
import { Fade, Stagger } from 'react-animation-components';

import styled from 'styled-components';
 
const StyledIntroSection = styled.div`
    position: relative;
    height: 100vh;
    padding-left: 5em;
    padding-right: 5em;
    .inner {

    }
    .before-name{
        font-size: 1em;
        color: var(--text-color-2);
    }
    .name{
        font-size: 5em;
        font-weight: bold;
    }
    .title{
        font-size: 3.5em;
        font-weight: bold;
        color: var(--text-color-1);
    }
    .description{
        font-size: 1.2em;
        color: var(--text-color-2);
    }
    
    @media only screen and (max-width: 576px) {
        .name{
            font-size: 3em;
        }
        .title{
            font-size: 2.5em;
        }
    }
`;

const StyledIntroInner = styled.table`
    position: relative;
    height: 100%;
    width: 100%
    
`;

function Intro({name, desc, title}) {
    return (
      <StyledIntroSection id="intro">
          <StyledIntroInner>  
            <tbody>
                <tr>
                <td className="align-middle">
                    <div className="before-name">Hi! My name is</div>
                    <Stagger in>
                        <Fade in duration={1000}><div className="name">{name}.</div></Fade>
                        <Fade in duration={2000}><div className="title">{title}</div></Fade>
                        <Fade in duration={2000}><div className="description">{desc}</div></Fade>           
                    </Stagger>
                </td>
                </tr>
            </tbody>
          </StyledIntroInner>
      </StyledIntroSection>
    )
  }
export default Intro;