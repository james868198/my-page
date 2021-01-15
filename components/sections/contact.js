import { Container, Row, Col, Button } from 'reactstrap'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
 
const StyledContactSection = styled.div`
    text-align: center;
    min-height: 90vh;
    .contact-board-content {
        display: inline-block;
        text-align: left;
        max-width: 500px;
        font-size: 1.2em;
    }
    .contact-board-info {
        display: inline-block;
        font-size: 1.2em;
        .email {
            font-size: 2em;
        }
    }
    @media only screen and (max-width: 576px) {
        .contact-board-info {
            .email {
                font-size: 1.6em;
            }
        }
    }
`;

function Contact({email, contact, show}) {
    return (
      <CSSTransition in={show} timeout={1000} classNames="fade-in">
        <StyledContactSection id="contact">
            <Container>
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
        </StyledContactSection>
      </CSSTransition>
    )
  }
export default Contact;