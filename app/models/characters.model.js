const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
    nom: String,
    sexe: String,
    peau:String,
    cheveux:String,
    pilositefacial:String,
    vetement:String,
    accessoire :String,
    chat:String,
    pays:String,
   // postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', CharacterSchema);