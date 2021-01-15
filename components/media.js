import { Fade } from 'react-animation-components';
import { FaLinkedin, FaReact, FaGithubSquare, FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
 
const StyledMedia = styled.div`
    position: absolute;
    bottom: 10px;
    left: 20px;
    height: auto;
    width: 40px;
    transition: all 0.8s ease-in-out;
    .arrow {
        opacity: 0;
        transition: all 0.5s ease-in-out;
    }
    ul.social-media-container {
        margin: 0 auto;
        padding: 0;
        list-style-type: none;
        
        .social-media-icon {
            margin: 10px 0 10px 0;
            opacity: 0.5;
            &:hover {
            opacity: 1;
            }
        }
        
        &:after {
            content: "";
            display: block;
            width: 2px;
            height: 120px;
            margin: 15px;
            background-color: var(--line-color-1);
        }
    }
    @media only screen and (max-width: 576px) {
        max-height: 40px;
        overflow: hidden;
        
        .arrow {
            opacity: 1;
        }
        &:hover {
            max-height: 400px;
            .arrow {
            opacity: 0;
            }
        } 
    }
`;

function Media({media}) {
    if (!media) {
        return <div></div>;
    }
    return (
        <StyledMedia>
            <Fade in duration={1000}>
            <ul className="social-media-container">
                <li className="arrow">
                    <FaArrowUp size={32}/>
                </li>
                {media.map((mediaData, mediaId) => {
                    let mediaItem = <div></div>;
                    switch (mediaData.name) {
                    case "linkedin":
                        mediaItem = <a href={mediaData.link} target="_blank"><FaLinkedin size={32}/></a>
                        break;
                    case "github":
                        mediaItem = <a href={mediaData.link} target="_blank"><FaGithubSquare size={32}/></a>
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
            </Fade>
        </StyledMedia>
    );
  }
export default Media;