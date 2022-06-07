const express = require('express');
const { findById } = require('../../models/Category');
const router = express.Router();
const {
  CategoriesGet,
  CategoryUpdate,
  CategoryDelete,
  CategoryCreate,
  fetchCategory
} = require('./categories.controllers');

router.param("CategoryId", async(req, res, next, CategoryId)=>{
const Category = await findById(CategoryId, next);
if(Category) {
  req.Category = Category; 
  next()
}else{
  const error ={message: "post not found ", status: 404}
  next(error)
}
})

router.get('/', CategoriesGet);
router.get('/:CategoryId', fetchCategory);

router.post('/', CategoryCreate);

router.delete('/:CategorytId', CategoryDelete);

router.put('/:CategoryId', CategoryUpdate);

module.exports = router;
