 
 module.exports = (app) => {
    const users = require('../controllers/users.controller.js');
 // Create a new User
 app.post('/users', users.create);

 // Retrieve all Users
 app.get('/users', users.findAll);

 app.post('/login',users.login );

}