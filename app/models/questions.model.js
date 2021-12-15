const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema({
    sessioninformation:String,
    question:String,
    answer:{
   type:String,
    default: 'answer'},
    email:String,
    nom: String,
    prenom:String,
    statue:String,
    phone:String,
    job:String,
    civility:String,
    sexe: String,
    region:String,
    pays:String,
    
    postedBy: 
    {
        type:String,
         default: 'postedBy'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);