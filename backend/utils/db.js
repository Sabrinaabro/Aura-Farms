const mongoose = require("mongoose");

const URI = process.env.mongoDB_URI;


const connectionDB = async() => {
    try {
        await mongoose.connect(URI);
        console.log("connection Successful");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
};

module.exports = connectionDB;