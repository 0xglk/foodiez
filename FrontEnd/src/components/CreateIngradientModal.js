import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import ingradientStore from '../stores/ingradientStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateIngradientModal(props) {
  const [ingradient, setIngradient] = useState({
    ingradient: '',
  });
  const handleChange = (event) => {
    setIngradient({ ...ingradient, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    ingradientStore.createIngradient(ingradient);
    props.closeModal();
  };
  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Ingradient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Ingradient</InputGroup.Text>
            <Form.Control type="text" name="ingradient" onChange={handleChange} />
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
