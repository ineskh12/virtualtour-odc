const Character = require('../models/characters.model.js');

const mongoose = require('mongoose');


// Create and Save a new User
exports.create = (req, res) => {
  
    console.log('hi ines')
 
     // Create a Characters
     const char = new Character({
 
         nom: req.body.nom,
         sexe: req.body.sexe,
         peau:req.body.peau,
         cheveux:req.body.cheveux,
         pilositefacial:req.body.pilositefacial,
         vetement:req.body.vetement,
         accessoire :req.body.accessoire,
         chat:req.file.filename,
         pays:req.body.pays,
         postedBy: req.body.postedBy,
        
     });
 
     // Save Characters in the database
     char.save()
     .then(characters => {
 
          res.send({ status:'200', message: "the new Character",characters});
     }).catch(err => {
         res.status(500).send({
             message: err.message || "Some error occurred while creating the Character."
         });
     });
 };
 
 
// Retrieve and return all characters from the database.
exports.findAll = (req, res) => {
   
    Character.find().sort({"updatedAt":-1})
    .then(characters => {
       
        res.send({ status:'200', message: "All the characters",characters});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};



 
// Retrieve and return all characters from the database with pays   .
exports.findAllByCountry = (req, res) => {
    Character.find({'pays': req.params.charId}).sort({"updatedAt":-1})
  
    .then(characters => {
       
        res.send({ status:'200', message: "All the characters",characters});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};



// Find a single ad with a adId
exports.findOne = (req, res) => {
 
    Character.aggregate([
        { $match: { _id: mongoose.Types.ObjectId(req.params.charId) } },
        //{ $project: {  createdAt: 0, __v: 0 } }
    ])
    .then(character => {

        
       
        if(!character) {
            return res.status(404).send({
                message: "character not found with id " + req.params.charId
            });            
        }
      
        res.status(200).json({ status:200,
            message: "character is found with id " + req.params.charId,character
        });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "character not found with id " + req.params.charId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving character with id " + req.params.charId
        });
    });
};




