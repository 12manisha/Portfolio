import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';

function Header() {
  const brandStyle = {
    fontFamily: 'Merriweather, serif',
    fontSize: "2em",
    fontStyle: 'normal'
      };

  return (
    <>
      <Navbar style={{backgroundColor:'#006266'}} data-bs-theme="dark">
        <Container>
          <Navbar.Brand style={brandStyle} href="/">MJ</Navbar.Brand>
          <Nav style={{color:'#E3F4F4'}}>
            <Link style={{marginLeft:'1.5rem' , cursor:'pointer'}} activeClass="active" to="skills" spy={true} smooth={true} offset={-90} duration={200}   > Skills</Link>
            <Link style={{marginLeft:'1.5rem' , cursor:'pointer'}} activeClass="active" to="projects" spy={true} smooth={true} offset={-90} duration={200} > Projects</Link>
            <Link style={{marginLeft:'1.5rem' , cursor:'pointer'}} activeClass="active" to="contactme" spy={true} smooth={true} offset={-90} duration={200} > ContactMe </Link>
            <Link style={{marginLeft:'1.5rem' , cursor:'pointer'}} activeClass="active" to="education" spy={true} smooth={true} offset={-90} duration={200} > Education </Link>
            <Link style={{marginLeft:'1.5rem' , cursor:'pointer'}} activeClass="active" to="experience" spy={true} smooth={true} offset={-90} duration={200} > Experience </Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;