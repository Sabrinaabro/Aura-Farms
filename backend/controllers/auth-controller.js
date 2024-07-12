const User = require("..//models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try{
        res.status(200).json({ msg: "Welcome, I am Sabrina" });

    }catch(error){
        console.log(error);
    }
};


//Registration page

const register = async (req,res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({ msg: "email already exists"});
        }

        //hashing the password
       

        const userCreated = await User.create({
            username, 
            email, 
            phone, 
            password,
         });
        
        res.status(201).json({ msg: userCreated });      
    }
     catch (error) {
        res.status(400).json({message: "Page Not Found"});
    }
};

module.exports = { home, register };