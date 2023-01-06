const Pet = require("../models/pet.model.js"); 


module.exports = {
    getAllPets: (req, res) => {
        Pet.find({}) 
            .then((allPets) => res.json(allPets))
            .catch((err) => console.log(err));
    },

    getOnePet: (req, res) => {
        Pet.findOne({ _id: req.params.id }) 
            .then((onePet) => res.json(onePet))
            .catch((err) => console.log(err));
    },

    createPet: (req, res) => {
        Pet.create(req.body) 
            .then((newPet) => res.json(newPet)) 
            
            .catch((err) => res.status(400).json(err));
    },


    updatePet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true, 
        })
            .then((updatedPet) => res.json(updatedPet))
            .catch((err) =>{
                console.log("Something went wrong with UPDATE", err);
                res.status(400).json(err)
            }
    )},

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params.id })
            .then((deletedId) => res.json(deletedId))
            .catch((err) => console.log(err));
    },
};