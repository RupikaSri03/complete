import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import App from './App';
import Register from './Register';
import Login from './Loginpage'
import Totalresume from './Totalresume';
import Todos from './Todos';
import Weatherapp from './Weatherapp';
import Responsivepage from './Responsivepage';
import Products from './Products';
import { BrowserRouter, Routes, Route } from "react-router-dom";




let Apilanding = ()=>{
    return(
        <div>
          <BrowserRouter>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/Register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/Loginpage">
              Login
            </Nav.Link>
            <Nav.Link eventKey={3} href="/Totalresume">
              Resume
            </Nav.Link>
            <Nav.Link eventKey={3} href="/Products">
              Products
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
     <Route>
     <Route path="/" element={<App />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Loginpage" element={<Login/>}/>
        <Route path="Totalresume" element={<Totalresume />} />
        <Route path="/Todos" element={<Todos />} />
        <Route path="/Weatherapp" element={<Weatherapp />} />
        <Route path="/Responsivepage" element={<Responsivepage />} />
        <Route path="/Products" element={<Products />} />

        
        

        

         
     </Route>
      </Routes> 
    </BrowserRouter>
        </div>
    )

}

export default Apilanding;