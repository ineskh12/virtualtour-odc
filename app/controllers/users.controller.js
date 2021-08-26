
const User = require('../models/users.model.js');


// Create and Save a new User
exports.create = (req, res) => {
  
   console.log('hi ines')

    // Create a User
    const user = new User({
        email:req.body.email,
        motdepasse:req.body.motdepasse,
         pays:req.body.pays,
      
       
    });

    // Save User in the database
    user.save()
    .then(data => {

         res.send({ status:'200', message: "the new user",data});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
       
        res.send({ status:'200', message: "All the users",users});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

// // login
// exports.login = (req, res) => {

//     const {email} = req.body.email;
//     const {pwd} = req.body.motdepasse;
  

//     User.findOne({email} ,{pwd})

//     .then(news => {
//         if(!news) {
//              return res.status(404).send({
//                  message: "News not found with id " + req.params.email
//              });            
//          }
//          res.send({ status:200,
//              message: "News is found with id " + req.params.email,news
//          });
//      })
//    .catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving users."
//         });
//     });
// };

exports.login = (req, res) => {
    if(req.body.email && req.body.motdepasse) {
        // check username and password
        if( User.findOne({email} ,{pwd})) {
            return res.status(404).send({
                message: "News not found with id " + req.params.email
            });
        } else {res.send({ status:200,
            message: "News is found with id " + req.params.email,news
        });}
        
    }
    res.status(500).send({
        message: err.message || "Some error occurred while retrieving users."
    });
};



exports.login=(req, res) =>{
    if (req.body.email & req.body.motdepasse != null) {
        res.status(500).send({
            message:"you are in."
        });
    } else {
        const {email}= req.body.email 
        const {pwd}= req.body.motdepasse
        User.findOne({email} ,{pwd})
       //var q = db.query("SELECT * FROM `users` WHERE `username`='" + req.params.username + "' AND `password`='" + req.params.password + "'");

       if (q) {
          // Set the sessions.
          req.session.username = req.params.username;
          req.session.password = req.params.password;
       }
    }
};


exports.login=(req, res) =>{
    if(req.body.email==users[request.username] && request.password==users[request.username].password) {
        users[request.username].auth=true;
        var data = {result:'success','message':'login successful'};
        callback(data);
    } else {
        var data = {result:'error','message':'login incorrect'};
        callback(data);
    }
}