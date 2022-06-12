import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import React, { useState,useEffect}from 'react';
import ingredientStore from '../stores/ingredientStore';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CreateIngredientModal(props) {
  const arraymeow =[];
  const [checker, setChecker] = useState("");
  const [query, setQuery] = useState("");
  const [ingredient, setIngredient] = useState({
    ingredient: '',
  });
  useEffect(() => {
    const timeOutId = setTimeout(() => checkvalid(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  ingredientStore.ingredient.forEach(element => {
    arraymeow.push(element.ingredient)
   });

  function checkvalid(query){
    if(query){
      const even = (element) => element.toLowerCase() === query.toLowerCase();
      setChecker(arraymeow.some(even));
    } else if(!query) {
      console.log("Empty")
    }
  }
  const handleSubmit = (event) => {
    if (!query) {
    alert("Field is Empty")
    } else {
      event.preventDefault();
      ingredientStore.createIngredient({ "ingredient": (query).toLowerCase()});
      setIngredient({ ...ingredient, "ingredient": (query).toLowerCase() });
      setQuery("")
      props.closeModal();
    }
  
  };
  return (
    <Modal centered show={props.isOpenn} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Ingredient</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Ingredient</InputGroup.Text>
            <Form.Control type="text" name="ingredient" value={query} onChange={event => setQuery(event.target.value)}  isInvalid={checker}/>
            <Form.Control.Feedback type="invalid">
            Included In Ingredients List Before.
          </Form.Control.Feedback>
          </InputGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" disabled={checker} onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
