import Link from 'next/link'
import Layout from '../components/layout'
import { Container, Row, Col, Button } from 'reactstrap'
import styled from 'styled-components';

const StyledFourOhFour = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  text-align: center;
  font-size: 2em;
  .title {
    font-size: 7em;
  }
`;

export default function FourOhFour(props) {

  return (
    
    <Layout {...props}>
      <RenderNotFoundPage/>
    </Layout>
  )
}

function RenderNotFoundPage() {
  return (
    <StyledFourOhFour>
      <div className="title">404</div>
      <br/>
      <div>Page Not Found</div>
      <br/>
      <Link href="/">
        <a><Button outline color="secondary" size="lg" >Return to Home</Button></a>  
      </Link>
    </StyledFourOhFour>
  )
}