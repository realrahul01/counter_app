import {Container,Navbar,Nav, Button} from 'react-bootstrap';
import {useSelector} from 'react-redux'

const Header = ()=>{
    const counter = useSelector((state=>state.counter.count))
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <p style={{color:'#fff'}}>{counter}</p>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;