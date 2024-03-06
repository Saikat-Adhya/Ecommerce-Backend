/**
 * POST localhost:8080/ecomm/api/v1/auth/categories
 */
category_controller = require("../controllers/category.controller")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/categories",category_controller.createNewCategory)
}