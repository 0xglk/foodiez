const Category = require('../../models/Recipe');

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
    const findPost = await Category.findById(CategoryId);
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
