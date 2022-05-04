import './App.css';
import MapsList from './data/maps_list';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Polaroid from './components/Polaroid';
import { Link } from 'react-router-dom';

function App() {
  let MapsElements = MapsList.map((map: any) => {
    return (
      <Col key={map.name}>
        <Polaroid
          src={map.thumbnail}
          name={map.name}
          link={map.link}
          disabled={map.disabled && 'true'}
        />
      </Col>
    );
  });

  return (
    <Container>
      <Link to="/">
        <h1 className="display-4 text-center py-4">Valorant Sova Spots</h1>
      </Link>

      <Row className="py-5 valorant-maps-section">{MapsElements}</Row>
    </Container>
  );
}

export default App;
