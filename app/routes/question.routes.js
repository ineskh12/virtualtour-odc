module.exports = (app) => {
   // const { uploadFile } = require('../../config/upload-file');
    const quess = require('../controllers/question.controller.js');
 // Create a new characters

 app.post('/quess',quess.create);

 

 app.get('/quess', quess.findAll);

 //Retrieve all characters by country 
 app.get('/quess/:pays',quess.findAllByCountry);

  // Retrieve a single character with charId
 // app.get('/characters/:charId', characters.product_details);

  app.get('/onequess/:charId', quess.findOne);

   // Update a characters with charId
  // app.post('/characters/edit/:charId',characters.update);
   app.post('/edit/:charId', quess.update);


   // get calendar content 

   //app.get('/calendar/:pays', characters.getdata);

   // Delete a characters with charId
   //app.delete('/characters/:charId', characters.delete);


 }