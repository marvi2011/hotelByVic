import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import starPremiun2 from "../../assets/starPremiun2.png";
import premiun from "../../assets/premiun.jpeg";
import bañoPremiun from "../../assets/bañoPremiun.jpeg";

const ItemHabiPremiun = () => {
  return (
    <body className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-info-subtle text-center py-5">
        <h1 className="display-4">Suite Premiun</h1>
      </div>
      <Container className="mt-4">
        <Row>
          <Col>
            <img className="img-fluid" src={premiun} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={starPremiun2} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={bañoPremiun} alt="" />
          </Col>
        </Row>
      </Container>
      <p className="display-6 text-center">
        Nuestra habitación deluxe te invita a un descanso inolvidable. Relájate
        en nuestra cama king size con sábanas de algodón egipcio, disfruta de un
        baño revitalizante con amenities exclusivos y comienza tu día con un
        desayuno gourmet servido en la comodidad de tu habitación. La mini
        nevera te permite mantener tus bebidas y snacks frescos en todo momento,
        mientras que el ambiente acogedor y la vista panorámica completan esta
        experiencia única
      </p>
      <hr className="border border-info border-3 opacity-75"></hr>
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-info-subtle text-center py-5">
          <h1 className="display-4">Servicios</h1>
        </div>
      </Container>
      <ListGroup className="mt-4">
        <ListGroup.Item>
        Baño privado con amenities de alta calidad para tu máximo confort
        </ListGroup.Item>
        <ListGroup.Item>
        Iluminación ambiental para crear un ambiente relajante y romántico
        </ListGroup.Item>
        <ListGroup.Item>
        Amplio placard y caja de seguridad para que guardes tus pertenencias
        </ListGroup.Item>
        <ListGroup.Item>Conexión de Wifi, confortable living en un ambiente climatizado</ListGroup.Item>
      </ListGroup>
      <Button type="submit" className="mt-5" variant="primary">
        Reserva ahora
      </Button>
    </body>
  );
};

export default ItemHabiPremiun;
