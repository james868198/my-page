import { createGlobalStyle } from 'styled-components';
import AnimationStyles from './AnimationStyles';

export const GlobalStyles = createGlobalStyle`
  :root {
    
    --background-color: ${props => props.theme.body};
    --text-color: ${props => props.theme.text};
    --card-color: ${props => props.theme.card};
    --body-color-1: ${props => props.theme.bodyColor1};
    --body-color-2: ${props => props.theme.bodyColor2};
    --text-color-1: ${props => props.theme.textColor1};
    --text-color-2: ${props => props.theme.textColor2};
    --icon-color-1: ${props => props.theme.iconColor1};
    --icon-color-2: ${props => props.theme.iconColor2};
    --line-color-1: ${props => props.theme.lineColor1};
    --line-color-2: ${props => props.theme.lineColor2};
  }
  
  html {
    font-size: 14px;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: inherit;
      text-decoration: none;
      cursor: pointer;
    }
  }

  body {
    background: var(--background-color);
    overflow: hidden;
    color: var(--text-color);  
  }
  div {
    margin: 0 auto;
    padding: 0;
  }

  .navbar,
  .navbar .btn,
  .navbar .dropdown-item,
  .navbar button {
    font-size: 1.2rem;
  }

  .board-title {
    font-size: 3.2em;
    
  }
  .row {
    padding-top: 0.8em;
    padding-bottom: 0.8em;
  }

  .main {
    height: 100vh;
    overflow-y: scroll;
  }

  .before-line {
    &:before {
      content: "";
      display: inline-block;
      width: 160px;
      height: 2px;
      margin: 10px;
      background-color: var(--line-color-1);
    }
  }
  .after-line {
    &:after {
      content: "";
      display: inline-block;
      width: 160px;
      height: 2px;
      margin: 10px;
      background-color: var(--line-color-1);
    }
  }

  .footer {
    text-align: center;
    font-size: 10px;
    color: var(--text-color-2);
  }

  @media only screen and (max-width: 768px) {
    html {
      font-size: 12px;
      .before-line {
        &:before {
          width: 80px;
        }
      }
      .after-line {
        &:after {
          width: 80px;
        }
      }
    }
  }
  
  @media only screen and (max-width: 576px) {
    .before-line {
      &:before {
        width: 40px;
      }
    }
    .after-line {
      &:after {
        width: 40px;
      }
    }
  }
  
  ${AnimationStyles};
`;