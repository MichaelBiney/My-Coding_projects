const mongoose = require("mongoose"); 

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name is required"],
        minlength:[3,"Name must have 3 charcters"]

    },

    type:{
        type:String,
        required: [true,"Shoe size  is reqired"],
        minlength:[3,"Shoe Name must have 3 charcters"]
        
    },

    description:{
        type: String,
        required: [true,"Shoe size is reqired"],
        minlength:[1,"Shoe size must have 1 charcters"]

    },

    skills1:{
        type: String
    },

    skills2:{
        type: String
    },

    skills3:{
        type: String 
    }


}, {timestamps: true})


const Pet = mongoose.model("Pet", PetSchema);


module.exports = Pet;