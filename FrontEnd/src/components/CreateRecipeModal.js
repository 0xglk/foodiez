import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import ingredientStore from '../stores/ingredientStore';
import recipesStore from '../stores/recipesStore';
import categoryStore from '../stores/categoryStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import authStore from "../stores/authStore";

const genresArray = []
export default function CreateRecipeModal(props) {
  const [recipe, setRecipe] = useState({
    title: '',
    Category: {},
    image: '',
    des: '',
    ingredient: genresArray,
    createdby: authStore.user._id,
    createdby_name: authStore.user.username,
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleChange1 = (event) => {
    if (event.target.checked === true) {
      genresArray.push(event.target.value);

    } else {
      const index = genresArray.indexOf(event.target.value);
      if (index > -1) {
        genresArray.splice(index, 1);
      }

    }
  };
  const ingredientList = ingredientStore.ingredient.map((ingredient) => {
    return( 
    <>
    <input onChange={handleChange1} type="checkbox" key={ingredient._id} value={ingredient.ingredient} /> {ingredient.ingredient}<br />
    </>
    );
  })
  const categoryList = categoryStore.Category.map((category) => {
        return <option key={category._id} value={category._id}>{category.name}</option>
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    recipesStore.createRecipe(recipe);
    props.closeModall();
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
          <div className="controle_bootstrap">
          <Form.Select name="Category" onChange={handleChange}  defaultValue={"default"} aria-label="Default select example" required={true}>
            <option value={"default"} disabled={true}>Select a Category</option>
            {categoryList}
          </Form.Select>
          </div>
          <div className="classic" >
            <h4>Ingredients</h4>
            <div className="classic_checkboxs" >
              {ingredientList}
          </div>
          </div>
          <div className="control_right_shoulder">
          <InputGroup>
            <InputGroup.Text>Image Url</InputGroup.Text>
            <Form.Control type="text" name="image" onChange={handleChange} />
          </InputGroup>
          </div>
        </Form>
        <div className="control_right_shoulder_textarea">
        <textarea name="des" onChange={handleChange}  rows="4" cols="50">
          
          </textarea>
         </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
