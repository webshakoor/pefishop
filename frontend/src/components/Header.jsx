import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {FaShoppingCart,FaUser} from 'react-icons/fa'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
          <LinkContainer to='/'>
        <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to='/cart'>
          <Nav.Link className='pe-2' ><FaShoppingCart/>ShoppingCart</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin'>
          <Nav.Link ><FaUser/>SignIn</Nav.Link>
            </LinkContainer>
            
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;