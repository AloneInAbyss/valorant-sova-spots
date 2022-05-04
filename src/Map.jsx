import './Map.css';

import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Polaroid from './components/Polaroid';
import MapsSpots from './out/maps_spots';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Map(props) {
  const [show, setShow] = useState(false);
  const [modalName, setModalName] = useState();
  const [modalImages, setModalImages] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = (spot) => {
    setModalName(spot.name);
    setModalImages(spot.images);
    setShow(true);
  };

  return (
    <>
      <Container>
        <Link to="/">
          <h1 className="display-4 text-center py-4">Valorant Sova Spots</h1>
        </Link>

        <Row className="py-5 valorant-maps-section">
          <h2 className="display-3 ps-5 mb-5">{props.name}</h2>
          <Row className="d-flex flex-row bg-white m-0 py-3 mb-3">
            <Col>
              <h3 className="h2">Ataque</h3>
            </Col>
            <Col>
              <h3 className="h2">Defesa</h3>
            </Col>
          </Row>
          <Col>
            {MapsSpots[props.name.toLowerCase()].attack.map((spot) => {
              return (
                <div onClick={() => handleShow(spot)} key={spot.thumbnail}>
                  <Polaroid src={spot.thumbnail} name={spot.name} />
                </div>
              );
            })}
          </Col>
          <Col>
            {MapsSpots[props.name.toLowerCase()].defense.map((spot) => {
              return (
                <div onClick={() => handleShow(spot)} key={spot.thumbnail}>
                  <Polaroid src={spot.thumbnail} name={spot.name} />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">{modalName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalImages &&
            modalImages.map((image) => {
              return (
                <img
                  src={image}
                  className="img-fluid pb-3"
                  alt=""
                  key={image}
                />
              );
            })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Map;
