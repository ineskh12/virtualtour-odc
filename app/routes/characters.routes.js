module.exports = (app) => {
    const { uploadFile } = require('../../config/upload-file');
    const characters = require('../controllers/characters.controller.js');
 // Create a new characters

 app.post('/characters',uploadFile,characters.create);

 // Retrieve all characters
 app.get('/characters', characters.findAll);

 //Retrieve all characters by country 
 app.get('/characters/pays/:charId',characters.findAllByCountry);

  // Retrieve a single character with charId
  app.get('/characters/:charId', characters.findOne);


   // Update a characters with charId
   //app.post('/characters/edit/:charId',characters.update);

   // Delete a characters with charId
   //app.delete('/characters/:charId', characters.delete);


 }