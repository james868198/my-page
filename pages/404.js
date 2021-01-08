import Link from 'next/link'
import Layout from '../components/layout'
import { Container, Row, Col, Button } from 'reactstrap'

export default function FourOhFour(props) {

  return (
    
    <Layout {...props}>
      <RenderNotFoundPage/>
    </Layout>
  )
}

function RenderNotFoundPage() {
  return (
    <div  className="not-found-board">
      <div className="four-oh-four">404</div>
      <br/>
      <div>Page Not Found</div>
      <br/>
      <Link href="/">
        <a><Button outline color="secondary" size="lg" >Return to Home</Button></a>  
      </Link>
    </div>
  )
}