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