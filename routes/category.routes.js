const authMw = require("../middlewares/auth.mw")

/**
 * POST localhost:8080/ecomm/api/v1/auth/categories
 */
category_controller = require("../controllers/category.controller")
auth_mw = require("../middlewares/auth.mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/categories",[auth_mw.verifyToken, authMw.isAdmin],category_controller.createNewCategory)
}