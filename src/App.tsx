import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Polaroid from './components/Polaroid';

function App() {
  return (
    <Container className="text-white">
      <h1 className="display-4 text-center py-4">Valorant Sova Spots</h1>
      <Row className="py-5 valorant-maps-section">
        <Col>
          <Polaroid src="img/map_breeze.webp" name="Breeze" link="/breeze" />
        </Col>
        <Col>
          <Polaroid
            src="img/map_ascent.webp"
            name="Ascent"
            link="/ascent"
            disabled
          />
        </Col>
        <Col>
          <Polaroid
            src="img/map_fracture.webp"
            name="Fracture"
            link="/fracture"
            disabled
          />
        </Col>
        <Col>
          <Polaroid
            src="img/map_icebox.webp"
            name="Icebox"
            link="/icebox"
            disabled
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
