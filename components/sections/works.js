import { Container, Row, Col } from 'reactstrap'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { parseDate } from '../../utils/parseUtils';

const StyledWorksSection = styled.div`
    position: relative;
    min-height: 80vh;
    
`;
function Works({works, show}) {
    if (!works) {
        return(
            <div></div>
        );
    }
    return (
      <CSSTransition in={show} timeout={1000} classNames="fade-in">
        <StyledWorksSection id="work"> 
          <Container>
            <Row>
                <Col className='board-title after-line'>
                My Experiences
                </Col>
            </Row>
            <Row className="justify-content-md-center">
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
        </StyledWorksSection>
      </CSSTransition>
    );
}

export default Works;