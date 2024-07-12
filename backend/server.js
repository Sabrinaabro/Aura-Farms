require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectionDB = require("./utils/db");

app.use(express.json()); 
//this loc adds Express Middleware that parses incoming request bodies with JSON payloads

app.use("/api/auth", router);

const port = 5000;

connectionDB().then(() =>{
    app.listen(port, ()=>{
        console.log(`server is running at port: ${port}`);
    });
});

