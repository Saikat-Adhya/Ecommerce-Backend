const authMw = require("../middlewares/auth.mw")

/**
 * POST localhost:8080/ecomm/api/v1/auth/categories
 */
category_controller = require("../controllers/category.controller")
auth_mw = require("../middlewares/auth.mw")

module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/categories",[auth_mw.verifyToken, authMw.isAdmin],category_controller.createNewCategory)
}

module.exports = (app)=>{
    app.get("/ecomm/api/v1/auth/categories",[auth_mw.verifyToken, authMw.isAdmin],category_controller.showCategory)
}
module.exports = (app)=>{
    app.delete("/ecomm/api/v1/auth/category/:id",[auth_mw.verifyToken, authMw.isAdmin],category_controller.deleteCategory)
}
module.exports = (app)=>{
    app.put("/ecomm/api/v1/auth/category/:id",[auth_mw.verifyToken, authMw.isAdmin],category_controller.updateCategory)
}
