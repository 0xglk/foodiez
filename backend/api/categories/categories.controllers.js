const Category = require('../../models/Category');
const Recipe = require('../../models/Recipe');
const Ingredient = require('../../models/Ingredient');
const User = require('../../models/User');
exports.CategoryCreate = async (req, res, next) => {
  try {
    const newPost = await Category.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    //using next 
    return next(error);
  }
};

exports.fetchCategory = async(CategoryId, next)  => {
  try {
    const findPost = await Category.findById(CategoryId).populate('Recipe');
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

exports.CategoryDelete = async (req, res, next)  => {
  const { CategoryId } = req.params;
  try {
    await Category.findByIdAndDelete(req.Category._id);
    res.status(204).end()
  } catch (error) {
    //using next 
    return next(error);
  }
};

exports.CategoryUpdate = async (req, res, next)  => {
  try {
      await Category.findByIdAndUpdate(req.Category._id, req.body);
      res.status(204).end();
    } catch (error) {
      //using next 
      return next(error);
    }
};

exports.CategoriesGet = async (req, res, next)  => {
  try {
    const posts = await Category.find();
    res.json(posts);
  } catch (error) {
    //using next 
    return next(error);
  }
};

exports.recipeCreate = async (req, res, next) => {
  const { categoryId } = req.params;
  req.body.Category = categoryId
  var Recipe_values = {
    title: req.body.title,
    image: req.body.image,
    des: req.body.des,
    createdby: req.body.createdby,
    createdby_name: req.body.createdby_name
  };
  try {
    const newrecipe = await Recipe.create(Recipe_values);
    await Category.findByIdAndUpdate(categoryId, {
        $push: { recipe: newrecipe._id }, 
    });
    // const newingredient = await Ingredient.create({ingradient: req.body.ingredient});
    await Recipe.findByIdAndUpdate(newrecipe._id, {
        $push: { ingredient: req.body.ingredient, Category: categoryId }, 
    });
     await User.findByIdAndUpdate(req.body.createdby, {
        $push: {  recipe: newrecipe._id }, 
    });
    //   Ingredient.findOneAndUpdate({ ingredient: element }, {
    //     $push: { recipe: newrecipe._id }, 
    // }
    // );
    await req.body.ingredient.map ( element => {
     Ingredient.findOneAndUpdate({ingredient: element },{$push: { recipe: [newrecipe._id]}}, function(err, docs) {
      });
    });
    
    const values = {
      title: req.body.title,
      image: req.body.image,
      des: req.body.des,
      recipe: newrecipe._id,
      ingredient: req.body.ingredient,
      Category: categoryId,
      createdby: req.body.createdby,
      createdby_name: req.body.createdby_name,
    };
    res.status(201).json(values);
  } catch (error) {
    next(error);
  }
};