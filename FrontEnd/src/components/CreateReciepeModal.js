import {
  Modal,
  Button,
  InputGroup,
  Form,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import React, { useState } from 'react';
import ingradientStore from '../stores/ingradientStore';
import categoryStore from '../stores/categoryStore';
import recipesStore from '../stores/recipesStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CreateRecipeModal(props) {
  const [recipe, setRecipe] = useState({
    title: '',
    Category: {},
    image: '',
    des: '',
    ingredient: [],
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    recipesStore.createRecipe(recipe);
    props.closeModall();
  };
  const [value, setValue] = useState('Select a Category');
  const handleSelect = (e) => {
    // console.log(e);
    setValue(e);
    const categoryFound = categoryStore.Category.find((c) => c.name === value);
    setRecipe({ ...recipe, Category: categoryFound });
  };
  const categoryList = categoryStore.Category.map((e) => e.name);
  const ingradientsList = ingradientStore.ingradient.map((e) => e.ingredient);
  let checkedArr = [];
  const handleCheck = (event) => {
    if (event.target.checked == false) {
      checkedArr = checkedArr.filter((e) => e != event.target.value);
    } else {
      checkedArr.push(event.target.value);
    }
    // console.log(checkedArr);
    setRecipe({ ...recipe, ingredient: checkedArr });
  };

  return (
    <Modal size="lg" centered show={props.isOpenn} onHide={props.closeModall}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputGroup.Text>Recipe Name</InputGroup.Text>
            <Form.Control type="text" name="title" onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <Form.Control type="text" name="des" onChange={handleChange} />
          </InputGroup>
          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title={value}
              id="input-group-dropdown-1"
              onSelect={handleSelect}
            >
              {categoryList.map((c) => (
                <Dropdown.Item eventKey={c}>{c}</Dropdown.Item>
              ))}
            </DropdownButton>
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Ingredients</InputGroup.Text>

            {ingradientsList.map((r) => (
              <Form.Check
                inline
                label={r}
                value={r}
                type="checkbox"
                onClick={handleCheck}
              />
            ))}
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Image URL</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
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
