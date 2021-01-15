import { Container, Row, Col } from 'reactstrap'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
 
const StyledAboutSection = styled.div`
    position: relative;
    min-height: 80vh;

    .content {
        font-size: 1.2em;
    }

    .skill-title {
        color: var(--text-color-2);
    }

    .skill{
        font-size: 1.3em;
    }
`;
const StyledAvatar = styled.div`
    position: relative;
    width: 100%;;
    text-align: center;
    img {
        display: inline-block;
        width: 300px;
        height: 300px;
        filter: grayscale(100%);
        border-radius: 15px;
    }
    @media only screen and (max-width: 768px) {
        img {
            width: 240px;
            height: 240px;
        }
    }
`;
function About({about, portrait, skills, show, prefix}) {
    return (
      <CSSTransition key="about-title" in={show} timeout={1000} classNames="fade-in">
        <StyledAboutSection id="about">
            <Container>
                <Row>
                    <Col className='board-title after-line'>
                        About Me
                    </Col>
                </Row>
                <Row>
                    <Col md = {6}>
                        <StyledAvatar>
                            <img src={prefix + portrait} alt="Avatar"></img>
                        </StyledAvatar>
                    </Col>
                    <Col md = {6}>
                        <Container fluid={true}>
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
        </StyledAboutSection>
      </CSSTransition>
    )
}

export default About;