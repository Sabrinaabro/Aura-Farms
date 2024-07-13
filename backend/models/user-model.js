const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
username:{
    type: String,
    require: true,
},
email:{
    type: String,
    require: true,
},
phone:{
    type: String,
    require: true,
},
password:{
    type: String,
    require: true,
},
isAdmin:{
    type: Boolean,
    default: false, 
},
});

//securing the password with bcrypt
userSchema.pre('save', async function(next){  //working as middleware
     console.log("pre method", this);
     const user = this;

     if(!user.isModified("password")){
        return next();
     }
try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password; 
} catch (error) {
    return next(error);
}

});
// compare passwords
userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password);
}
//json web tokens
userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_secret_key,
        {
            expiresIn: "30d",
        }
        );
        
    } catch (error) {
        console.error("Token Error: ", error);
    }
};

// defining model or the collection name
const User = new mongoose.model ("User", userSchema);

module.exports = User;