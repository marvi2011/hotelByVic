import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavMenu = () => {
    return (
        <section>
             <Navbar expand="lg" className="bg-body-tertiary container-fluid">
      <Container>
        <img src='logo-hotel' alt='logo del hotel'></img>
        <Navbar.Brand href="#home">Refugio de las Nubes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#home">Habitaciones</Nav.Link>
            <Nav.Link href="#home">Restaurantes</Nav.Link>
            <Nav.Link href="#home">Eventos</Nav.Link>
            
            <Nav.Link href="#home">Contacto</Nav.Link>
            <Nav.Link href="#home">Login</Nav.Link>
           
            <Nav.Link href="#home">Idioma</Nav.Link>
            
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Navbar expand="lg" className="bg-body-tertiary container-fluid">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#home">Imágenes</Nav.Link>
            <Nav.Link href="#home">Comodidades</Nav.Link>
            <Nav.Link href="#home">Ubicación</Nav.Link>
            <Nav.Link href="#home">Reservas</Nav.Link>
            <Nav.Link href="#home">Quienes Somos</Nav.Link>
            <Nav.Link href="#home">Comentario de Nuestros Huéspedes</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </section>
    );
};

export default NavMenu;

