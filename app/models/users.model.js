const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: String,
    motdepasse: String,
    pays:String,
  
    
    
  

}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);