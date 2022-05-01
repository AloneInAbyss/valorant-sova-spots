import './Map.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Polaroid from './components/Polaroid';

function Map(props: any) {
  return (
    <Container>
      <h1 className="display-4 text-center py-4">Valorant Sova Spots</h1>

      <Row className="py-5 valorant-maps-section">
        <h2 className="h1 ps-5 pb-4 mb-5">{props.name}</h2>
        <Col>
          <h3 className="h2">Ataque</h3>
          <Polaroid src="img/spots/breeze/ataque_01.png" name="Bomb B" />
        </Col>
        <Col>
          <h3 className="h2">Defesa</h3>
          <Polaroid src="img/spots/breeze/defesa_01.png" name="Double Door" />
        </Col>
      </Row>
    </Container>
  );
}

export default Map;
