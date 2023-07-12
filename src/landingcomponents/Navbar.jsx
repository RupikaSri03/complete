import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">RESUME</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
            
    
          <Nav>
            <Nav.Link href="#About us">ABOUT US</Nav.Link>
            <Nav.Link href="#Education">EDUCATION</Nav.Link>
            <Nav.Link href="#Projects">PROJECTS</Nav.Link>
            <Nav.Link href="#Contact us">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>

    
  );
}

export default CollapsibleExample;