const Character = require('../models/characters.model.js');

const mongoose = require('mongoose');
const axios = require('axios');

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
         //postedBy: req.body.postedBy,
        
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
    Character.find({'pays': req.params.pays}).sort({"updatedAt":-1})
  
    .then(characters => {
        
       
        res.send({ status:'200', message: "All the characters",characters});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};


 
// now we can use that data from the outside!


// Retrieve and return all characters from the database.
//  exports.getdata = (req, res) => {

//  const cn = req.params.pays


 // const promise = axios.get('https://www.orangedigitalcenters.com/api/v1/client/country/'+cn+'/event').then(res => res.data)

//      promise.then(data => {
//          response.json({ message: 'Request received!', data })
//   })  .catch(err => console.log(err))

 
 
 //};

// Retrieve and return all characters from the database.
exports.getdata = async(req, res) => {
    const cn = req.params.pays
    try {
		const response = await axios.get('https://www.orangedigitalcenters.com/api/v1/client/country/'+cn+'/event');
       const ines= response.data
       //console.log(ines)
       res.status(200).json(ines)
            
          
      
	} catch (err) {
		res.status(500).json({ message: err });
	}
};

   
 
      
     
  
    
 

      
   



exports.findOne = function (req, res) {

     Character.findById(req.params.charId)
   

      .then(characters => {
                 if(!characters) {
            return res.status(404).send({
                message: "character not found with id " + req.params.charId
            });            
         }
      
         res.status(200).json({ status:200,
            message: "character is found with id " + req.params.charId,characters
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




exports.update = async (req, res) => {
   const char = await Character.findById(req.params.charId);


   if (req.body.nom !== undefined) {
      
        char.nom = req.body.nom;
        console.log('ines',char.nom)
    }

    if (req.body.sexe !== undefined) {
        char.sexe = req.body.sexe;
    }


    if (req.body.peau !== undefined) {
        char.peau = req.body.peau;
    }
  if (req.body.cheveux !== undefined) {
        char.cheveux = req.body.cheveux;
    }
 if (req.body.pilositefacial !== undefined) {
        char.pilositefacial = req.body.pilositefacial;
    }
    if (req.body.vetement !== undefined) {
        char.vetement = req.body.vetement;
    }
  if (req.body.accessoire !== undefined) {
        char.accessoire = req.body.accessoire;
    }
    if (req.body.pays !== undefined) {
        char.pays = req.body.pays;
    }

    if (req.file !== undefined) {
        char.chat = req.file.filename;
    }

// Find character and update it with the request body
console.log(char)
    char.save()
    .then(char => {
        if(!char) {
            return res.status(404).send({
                message: "character not found with id " + req.params.charId
            });
        }
        res.send(char);
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

  

