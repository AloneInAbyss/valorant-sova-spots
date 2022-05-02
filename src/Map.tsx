import './Map.css';

import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Polaroid from './components/Polaroid';

import { useState } from 'react';

function Map(props: any) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <h1 className="display-4 text-center py-4">Valorant Sova Spots</h1>

        <Row className="py-5 valorant-maps-section">
          <h2 className="h1 ps-5 pb-4 mb-5">{props.name}</h2>
          <Col onClick={handleShow}>
            <h3 className="h2">Ataque</h3>
            <Polaroid src="img/spots/breeze/ataque_01.png" name="Bomb B" />
          </Col>
          <Col>
            <h3 className="h2">Defesa</h3>
            <Polaroid src="img/spots/breeze/defesa_01.png" name="Double Door" />
          </Col>
        </Row>
      </Container>

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src="img/spots/breeze/ataque_01/01.png"
            className="img-fluid pb-3"
            alt=""
          />
          <img
            src="img/spots/breeze/ataque_01/02.png"
            className="img-fluid pb-3"
            alt=""
          />
          <img
            src="img/spots/breeze/ataque_01/03.png"
            className="img-fluid pb-3"
            alt=""
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Map;
