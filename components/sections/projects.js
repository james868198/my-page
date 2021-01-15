import { Container, Row, Col, Button, Card, CardBody, CardImg, CardLink, CardTitle, CardText } from 'reactstrap'
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import { FaFolder, FaGithub } from 'react-icons/fa';

const StyledProjectSection = styled.div`
    min-height: 80vh;
    text-align: center;
    .board-container {
        position: relative;
        width: 80%;
        margin: 0 auto;
        .project-container {  
            margin: 0 auto;
            padding: 1em;
            .card {  
                text-align: left;
                min-height: 300px;
                border-radius: 5px;
                border-style: none;
                background-color: var(--card-color);
                transition: all .2s ease-in-out;
                &:hover {
                transform: scale(1.1);
                }
            }
            .project-image {
                margin: 0;
                
                img {
                    border-radius: 5px;
                    max-height: 200px;
                }
            }
            .project-text {
                font-size: 1.2em;
            }
            .project-links {
                text-align: right;
            }
            .project-tags {
                .tag {
                display: inline-block;
                padding-right: 0.5em;
                color: var(--text-color-2);
                }
            }
        }
    }

    @media only screen and (max-width: 768px) {
        
    }
      
    @media only screen and (max-width: 576px) {
       
    }
`;
function Project({projects, show, prefix}) {
    if (!projects) {
        return(
            <div></div>
        );
    }
    return (
      <CSSTransition in={show} timeout={1000} classNames="fade-in">
        <StyledProjectSection id="project"> 
            <Container>
                <Row className="justify-content-md-center">
                    <Col className="board-title before-line after-line">My Projects</Col>
                </Row>
                <Row className="justify-content-md-center board-container">
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
                        <Col lg = {4} md = {4} sm = {4} key={projectId} className="project-container">
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
        </StyledProjectSection>
      </CSSTransition>
    );
}
export default Project;