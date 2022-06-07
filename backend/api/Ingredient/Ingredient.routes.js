const express = require('express');
const { findById } = require('../../models/Ingredient');
const router = express.Router();
const {
  IngredientGet,
  IngredientUpdate,
  IngredientDelete,
  IngredientCreate,
  fetchIngredient
} = require('./Ingredient.controllers');

router.param("IngredientId", async(req, res, next, IngredientId)=>{
const Ingredient = await findById(IngredientId, next);
if(Ingredient) {
  req.Ingredient = Ingredient; 
  next()
}else{
  const error ={message: "post not found ", status: 404}
  next(error)
}
})

router.get('/', IngredientGet);
router.get('/:IngredientId', fetchIngredient);

router.post('/', IngredientCreate);

router.delete('/:IngredientId', IngredientDelete);

router.put('/:IngredientId', IngredientUpdate);

module.exports = router;
