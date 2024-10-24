import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import starJunior from "../../assets/starJunior.png";
import vistaPiscina2 from "../../assets/vistaPiscina2.png";
import suiteJunior from "../../assets/suiteJunior.png";
const ItemHabiJunior = () => {
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-info-subtle text-center py-5">
        <h1 className="display-4">Suite Junior</h1>
      </div>
      <Container className="mt-4">
        <Row>
          <Col>
            <img className="img-fluid" src={starJunior} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={vistaPiscina2} alt="" />
          </Col>
          <Col>
            <img className="img-fluid" src={suiteJunior} alt="" />
          </Col>
        </Row>
      </Container>
      <p className="display-6 text-center">
        Nuestra habitación es el paraíso para los adolescentes. ¡Desconéctate y
        diviértete con nuestra consola de videojuegos, navega por internet a
        toda velocidad y disfruta de tus películas favoritas en la pantalla
        gigante! La mini nevera siempre estará llena de tus snacks favoritos y
        el baño privado te ofrece todo lo que necesitas para relajarte.
        ¡Prepárate para vivir una experiencia inolvidable!
      </p>
      <hr className="border border-info border-3 opacity-75"></hr>
      <Container>
        <div className="d-flex justify-content-between align-items-center mt-5 container-fluid bg-info-subtle text-center py-5">
          <h1 className="display-4">Servicios</h1>
        </div>
      </Container>
      <ListGroup className="mt-4">
        <ListGroup.Item>
          Juegos de mesa y consolas de videojuegos para que no te aburras nunca
        </ListGroup.Item>
        <ListGroup.Item>
          Un balcón con vistas increíbles para relajarte y disfrutar del aire
          fresco
        </ListGroup.Item>
        <ListGroup.Item>
          Decoración moderna y colorida para crear un ambiente divertido y
          juvenil
        </ListGroup.Item>
        <ListGroup.Item>Conexión de Wifi</ListGroup.Item>
      </ListGroup>
      <Button type="submit" className="mt-5" variant="primary">
        Reserva ahora
      </Button>
    </section>
  );
};

export default ItemHabiJunior;
