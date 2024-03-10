import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
    const expand = false;
    const brandStyle = {
    fontFamily: 'Merriweather, serif',
    fontSize: "2em",
    fontStyle: 'normal'
      };
  return (
    <>
        <Navbar key={expand} expand={expand} style={{backgroundColor: '#f0f0f0'}} className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#" style={brandStyle} >MJ</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h2>More Links!</h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav style={{fontSize:'1.5rem'}} className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="https://www.linkedin.com/in/12manisha/">LinkedIn</Nav.Link>
                  <Nav.Link href="https://leetcode.com/12manisha/">LeetCode</Nav.Link>
                  <Nav.Link href="https://github.com/12manisha">GitHub</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
}

export default Header;