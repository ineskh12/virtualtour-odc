const Question = require('../models/questions.model.js');

const mongoose = require('mongoose');


// Create and Save a new User
exports.create = (req, res) => {
  
    console.log('hi ines')
 
     // Create a Characters
     const ques = new Question({
        sessioninformation:req.body.sessioninformation,
        question:req.body.question,
        answer:req.body.answer,
        email:req.body.email,
        nom: req.body.nom,
        prenom:req.body.prenom,
        statue:req.body.statue,
        phone:req.body.phone,
        job: req.body.job,
        civility:req.body.civility,
        sexe: req.body.sexe,
        region:req.body.region,
        pays:req.body.pays,
        postedBy:  req.body.postedBy,

       
    
      
        
     });
 
     // Save Characters in the database

     ques.save()
     .then(quess => {
 
          res.send({ status:'200', message: "the new Question",quess});
     }).catch(err => {
         res.status(500).send({
             message: err.message || "Some error occurred while creating the Question."
         });
     });
 };
 
 
// Retrieve and return all Questions from the database.
exports.findAll = (req, res) => {
   
    Question.find().sort({"updatedAt":-1})
    .then(quess => {
       
        res.send({ status:'200', message: "All the Questions",quess});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Questions."
        });
    });
};



 
// Retrieve and return all Questions from the database with pays   .
exports.findAllByCountry = (req, res) => {
    Question.find({'pays': req.params.pays}).sort({"updatedAt":-1})
  
    .then(quess => {
        
       
        res.send({ status:'200', message: "All the Questions",quess});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Questions."
        });
    });
};


   
 
      
     
  
    
 

      
   



exports.findOne = function (req, res) {

    Question.findById(req.params.charId)
   

      .then(quess => {
                 if(!quess) {
            return res.status(404).send({
                message: "Question not found with id " + req.params.quessId
            });            
         }
      
         res.status(200).json({ status:200,
            message: "Question is found with id " + req.params.quessId,quess
         });
    }).catch(err => {
         if(err.kind === 'ObjectId') {
             return res.status(404).send({
                 message: "Question not found with id " + req.params.quessId
             });                
         }
         return res.status(500).send({
            message: "Error retrieving Question with id " + req.params.quessId
         });
     });
};




exports.update = async (req, res) => {
   const quess = await Question.findById(req.params.quessId);


   if (req.body.sessioninformation !== undefined) {
      
    quess.sessioninformation = req.body.sessioninformation;
        console.log('ines',quess.sessioninformation)
    }

    if (req.body.question !== undefined) {
      
        quess.question = req.body.question;
            console.log('ines',quess.question)
        }


        if (req.body.answer !== undefined) {
      
            quess.answer = req.body.answer;
                console.log('ines',quess.answer)
            }

    
     
            if (req.body.nom !== undefined) {
      
                quess.nom = req.body.nom;
                    console.log('ines',quess.nom)
                }
    
  
                if (req.body.prenom !== undefined) {
      
                    quess.prenom = req.body.prenom;
                        console.log('ines',quess.prenom)
                    }
        
                    if (req.body.statue !== undefined) {
      
                        quess.statue = req.body.statue;
                            console.log('ines',quess.statue)
                        }
  

                        if (req.body.phone !== undefined) {
      
                            quess.phone = req.body.phone;
                                console.log('ines',quess.phone)
                            }
    

                        if (req.body.job !== undefined) {
      
                            quess.job = req.body.job;
                                console.log('ines',quess.job)
                            }
                            if (req.body.civility !== undefined) {
      
                                quess.civility = req.body.civility;
                                    console.log('ines',quess.civility)
                                }

                                if (req.body.region !== undefined) {
      
                                    quess.region = req.body.region;
                                        console.log('ines',quess.region)
                                    }
  
                                    if (req.body.pays !== undefined) {
      
                                        quess.pays = req.body.pays;
                                            console.log('ines',quess.pays)
                                        }
                                        if (req.body.postedBy !== undefined) {
      
                                            quess.postedBy = req.body.postedBy;
                                                console.log('ines',quess.postedBy)
                                            }




// Find Question and update it with the request body
console.log(quess)
quess.save()
    .then(quess => {
        if(!quess) {
            return res.status(404).send({
                message: "Question not found with id " + req.params.quessId
            });
        }
        res.send(char);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Question not found with id " +req.params.quessId
            });                
        }
        return res.status(500).send({
            message: "Error updating Question with id " + req.params.quessId
        });
    });
};

  

