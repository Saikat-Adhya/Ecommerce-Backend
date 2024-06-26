/**
 * This will be the starting file of the project
 */
const express  = require("express")
const mongoose = require("mongoose")
const app = express()
const server_config = require("./configs/server.config")
const user_model = require("./models/user.model")
const db_config = require("./configs/db.config")
const becrypt = require("bcryptjs")

app.use(express.json()) //This is use to understand JSON file to the Node.Js

/**
 * Create an admin user at the starting of the application
 * if not already present
 */

// Connection with mongodb
mongoose.connect(db_config.DB_URL)

const db = mongoose.connection

db.on("error", ()=>{
    console.log("Error while connecting to the mongoDB");
})

db.once("open",()=>{
    console.log("connected to MongoDB");
    init()
})
async function init(){
 try{
    let user = await user_model.findOne({userId : "admin"})

    if(user){
        console.log("Admin is already present");
        return
    }
}catch(err){
    console.log("Error while reading the data",err);
}

    try {
        user = await user_model.create({
            name : "Saikat",
            userId: "admin",
            email : "sadhya58@gmail.com",
            userType : "ADMIN",
            password : becrypt.hashSync("welcome1",8)

        })
        console.log("Admin created ",user);
        
    } catch (err) {
        console.log("Error while create admin",err);
    }
}

/**
 * Stich the route to the server
 */
require("./routes/auth.routes")(app)
require("./routes/category.routes")(app)
/**
 * Start the server
 */
app.listen(server_config.PORT, ()=>{
    console.log("Server Started at port num: ", server_config.PORT);
})