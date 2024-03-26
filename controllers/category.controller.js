const category_model = require("../models/category.model")


/**
 * Controller for creating the category
 * 
 * POST localhost:8080/ecomm/api/v1/auth/categories
 * 
 * {
        "name" : "Household",
        "descryption" : "This will have all the household item"
    }
 */
exports.createNewCategory = async(req, res)=>{

    //read the req body

    //Create the category object
    const cat_data = {
        name : req.body.name,
        description : req.body.description
    }
    try {
        //Insert into MongoDb
        const category = await category_model.create(cat_data)
        return res.status(201).send(category)
    } catch (err) {
        console.log("Error while creating the category",err);
        res.status(500).send({
            message : "Error while creating the category"
        })
        
    }


    



    //Return the response of created category

}
//---------------------------------------------------------------//
//This is use to delete the category.//

exports.deleteCategory= async(req, res) => {
    try {
        // const cat_data = {
        //     name : req.body.name,
        //     description : req.body.description
        // }
        const {id} = req.params;

        const product = await category_model.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({message: "Oops!! Product not found"})
            
        } else {
            
            res.status(200).json({message: "Product deleted successfully !"});
        }
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

}
//----------------------------------------------------//
//This is use to update the category.//

exports.updateCategory= async(req, res)=>{
    try {
        const {id} = req.params;

        const product=await category_model.findByIdAndUpdate(id,req.body);
        if (!product) {
            return res.status(404).json({message: "Oops!! Product not found"})
            
        } else {
            
            res.status(200).json({message: "Product updated successfully !"});
        }
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }

}
//------------------------------------------------------------------------//
//This is use show the category.//


exports.showCategory=async(req, res)=>{
    try {
        const product=await category_model.find({});
        res.status(200).json(product) //Getting all the product list.
    } catch (error) {
        req.status(500).json({message: error.message})
        
    }
}