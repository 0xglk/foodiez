import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import categoryStore from '../stores/categoryStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateCategoryModal(props) {
  // const [checkedd, setCheckedd] = useState([]);
  const [category, setBook] = useState({
    name: '',
  });
  const handleChange = (event) => {
    setBook({ ...category, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    categoryStore.createcategory(category);
    props.closeModal();
  };


  return (
    <Modal centered show={props.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control type="text" name="name" onChange={handleChange} />
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
