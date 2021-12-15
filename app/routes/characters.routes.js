module.exports = (app) => {
    const { uploadFile } = require('../../config/upload-file');
    const characters = require('../controllers/characters.controller.js');
 // Create a new characters

 app.post('/characters',uploadFile,characters.create);

 // Retrieve all characters
 app.get('/characters', characters.findAll);


 app.get('/characters', characters.findAll);

 //Retrieve all characters by country 
 app.get('/characters/:pays',characters.findAllByCountry);

  // Retrieve a single character with charId
 // app.get('/characters/:charId', characters.product_details);

  app.get('/onecharacter/:charId', characters.findOne);

   // Update a characters with charId
  // app.post('/characters/edit/:charId',characters.update);
   app.post('/edit/:charId',uploadFile, characters.update);


   // get calendar content 

   app.get('/calendar/:pays', characters.getdata);

   // Delete a characters with charId
   //app.delete('/characters/:charId', characters.delete);


 }