
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





// Update a ad identified by the charId in the request
exports.update = async (req, res) => {
    const character = await Character.findById(req.params.charId);
  
    if (req.body.nom !== undefined) {
        character.nom = req.body.nom;
    }
    if (req.body.sexe!== undefined) {
        character.sexe = req.body.sexe;
    }
    if (req.body.peau!== undefined) {
        character.peau = req.body.peau;
    }
    if (req.body.peau!== undefined) {
        character.peau = req.body.peau;
    }

    if (req.body.cheveux!== undefined) {
        character.cheveux = req.body.cheveux;
    }
   
    if (req.body.pilositefacial!== undefined) {
        character.pilositefacial = req.body.pilositefacial;
    }
    if (req.body.vetement!== undefined) {
        character.vetement = req.body.vetement;
    }
 
    if (req.body.accessoire!== undefined) {
        character.accessoire = req.body.accessoire;
    }
    if (req.body.accessoire!== undefined) {
        character.accessoire = req.body.accessoire;
    }

    if (req.file !== undefined) {
        character.chat = req.file.filename;
    }
 
    if (req.body.pays!== undefined) {
        character.pays = req.body.pays;
    }
   
     if (req.body.postedBy!== undefined) {
        character.postedBy = req.body.postedBy;
    }
    
     // Find character and update it with the request body
     character.save()
     .then(character => {
         if(!character) {
             return res.status(404).send({
                 message: "character not found with id " + req.params.charId
             });
         }
         res.send(character);
     }).catch(err => {
         if(err.kind === 'ObjectId') {
             return res.status(404).send({
                 message: "character not found with id " +req.params.charId
             });                
         }
         return res.status(500).send({
             message: "Error updating character with id " + req.params.charId
         });
     });
 };
 

// Delete a character with the specified charId in the request
exports.delete = (req, res) => {
    Character.findByIdAndRemove(req.params.charId)
    .then(character => {
        if(!character) {
            return res.status(404).send({
                message: "character not found with id " + req.params.charId
            });
        }
        res.send({message: "character deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "character not found with id " + req.params.charId
            });                
        }
        return res.status(500).send({
            message: "Could not delete character with id " + req.params.charId
        });
    });
};







