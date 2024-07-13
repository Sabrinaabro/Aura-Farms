require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const connectionDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json()); 
//this loc adds Express Middleware that parses incoming request bodies with JSON payloads

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use(errorMiddleware);

const port = 5000;

connectionDB().then(() =>{
    app.listen(port, ()=>{
        console.log(`server is running at port: ${port}`);
    });
});

