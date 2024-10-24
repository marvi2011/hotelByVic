import suiteStandar from "../../assets/suiteStandar2.png";
import bañoStandar from "../../assets/bañoStandar.jpeg";
import vistaPiscina from "../../assets/vistaPiscina.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button';
const ItemHabitacion = () => {
  return (
    <body className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-info-subtle text-center py-5">
        <h1 className="display-4">Suite Standar</h1>
      </div>
      <Container className="mt-4">
        <Row>
          <Col>
            <img className="img-fluid" src={suiteStandar} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={bañoStandar} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={vistaPiscina} alt="" />
          </Col>
        </Row>
      </Container>
      <p className="display-6 text-center">
        Sumérgete en un oasis de tranquilidad en nuestra habitación. Relájate,
        descansa y comienza tu día con un desayuno completo. La refrigeración te
        permite disfrutar de tus bebidas y alimentos favoritos a la temperatura
        ideal.
      </p>
      <hr className="border border-info border-3 opacity-75"></hr>
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-info-subtle text-center py-5">
          <h1 className="display-4">Servicios</h1>
        </div>
      </Container>
      <ListGroup className="mt-4">
        <ListGroup.Item>
          Cama de lujo con sábanas suaves para un descanso reparador
        </ListGroup.Item>
        <ListGroup.Item>
          Baño privado con amenities de alta calidad para tu máximo confort
        </ListGroup.Item>
        <ListGroup.Item>
          Amplias ventanas con vistas panorámicas para relajarte
        </ListGroup.Item>
        <ListGroup.Item>
          Conexión de Wifi, escritorio ergonómico para trabajar con comodidad
        </ListGroup.Item>
       
      </ListGroup>
      <Button type="submit" className="mt-5" variant="primary">Reserva ahora</Button>
    </body>
  );
};

export default ItemHabitacion;
