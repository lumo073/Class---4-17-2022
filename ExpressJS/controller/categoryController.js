const Category = require('../model/CategoryModel')

//add category
exports.postCategory = async (req, res) => {
    let category = await Category.findOne({ category_name: req.body.category_name })
    if (!category) {
        let categoryToAdd = new Category({
            category_name: req.body.category_name
        })
        categoryToAdd = await categoryToAdd.save()
        if (!categoryToAdd) {
            return res.status(400).json({ error: 'Something went wrong' })
        }
        res.send(categoryToAdd)
    }
    else {
        return res.status(400).json({ error: "Category already Exists" })
    }

}

// INPUT
//req.body -> to get data from user through forms (POST)
//req.params - > to get data from user through url (GET or other)
//req.querry -> to get data from user through url, using variables

// OUTPUT
//res.status(code).json({}) - > to pass message(string) to user
//res.send(obj) - > to pass object to user

//Model.find() -> returns all data in array
//Model.find(filter) -> return all data that satisfies filter object in array
//Model.findOne(filter) -> returns single data that satisfies filte object
//Model.findById(id) -> return single data with givem id
//Model.findByIdAndUpdate(id,{}) -> update single data with given id , update value - {}
//Model.findByIdAndRemove(id) -> deletes single data with given id
//Model.findByIdAndDelete(id) ->  deletes single data with given id

//to get all categories
exports.getAllCategories = async (req, res) => {
    let categories = await Category.find()
    if (!categories) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(categories)
}


//to get category details
exports.getCategory = async (req, res) => {
    let categories = await Category.findById(req.params.id)
    if (!categories) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(categories)
}

//to update category
exports.updateCategory = async (req, res) => {
    let categoryToUpdate = await Category.findByIdAndUpdate(req.params.id, {
        category_name: req.body.category_name
    }, { new: true })
    if (!categoryToUpdate) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send(categoryToUpdate)
}

//to delete category
exports.deleteCategory = (req, res) => {
    Category.findOneAndDelete(req.params.id)
        .then(category => {
            if (!category) {
                return res.status(400).json({ error: "Category not found" })
            }
            return res.status(200).json({ error: " Category Deleted SuccessFully" })
        })
        .catch(error => {
            return res.status(400).json({ error: "Something went wrong" })
        })
}

