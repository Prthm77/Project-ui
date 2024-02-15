
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cl from '../../assets/Cl.png'
import './navbar.scss'

const Navbar1 = () => {
  return (
   
   <Navbar collapseOnSelect expand="lg" className="navbar-body ">
      <Container>
        <Navbar.Brand className='nav-img' href=""><img src={Cl} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
            
             
          </Nav>
          <Nav className='nav-group'>
            <Nav.Link className='nav-link' href="">About Us</Nav.Link>
            <Nav.Link className='nav-link' href="">Service</Nav.Link>
            <Nav.Link className='nav-link' href="">Team</Nav.Link>
            <Nav.Link className='nav-link' href="">Client</Nav.Link>
            <Nav.Link className='nav-link' href="">Contact Us</Nav.Link>


       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Navbar1