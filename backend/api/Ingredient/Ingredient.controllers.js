const Ingredient = require('../../models/Ingredient');

exports.IngredientCreate = async (req, res, next) => {
  try {
    const newPost = await Ingredient.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    //using next 
    return next(error);
  }
};

exports.fetchIngredient = async(IngredientId, next)  => {
  try {
    const findPost = await Ingredient.findById(IngredientId);
    // res.status(201).json(findPost);
    return findPost
  } catch (error) {
    //using next 
    return next(error);
  }
};
// exports.fetchPost = async(req, res, next)  => {
//   const { postId } = req.params;
//   try {
//     const findPost = await Category.findById(postId);
//     res.status(201).json(findPost);
//   } catch (error) {
//     //using next 
//     return next(error);
//   }
// };

exports.IngredientDelete = async (req, res, next)  => {
  const { IngredientId } = req.params;
  try {
    await Ingredient.findByIdAndDelete(req.Ingredient._id);
    res.status(204).end()
  } catch (error) {
    //using next 
    return next(error);
  }
};

exports.IngredientUpdate = async (req, res, next)  => {
  try {
      await Ingredient.findByIdAndUpdate(req.Ingredient._id, req.body);
      res.status(204).end();
    } catch (error) {
      //using next 
      return next(error);
    }
};

exports.IngredientGet = async (req, res, next)  => {
  try {
    const posts = await Ingredient.find();
    res.json(posts);
  } catch (error) {
    //using next 
    return next(error);
  }
};

exports.IngredientAvailable = async (req, res, next)  => {
  try {
    const posts = await Ingredient.find({}).select('ingredient -_id');
    res.json(posts);
  } catch (error) {
    //using next 
    return next(error);
  }
};