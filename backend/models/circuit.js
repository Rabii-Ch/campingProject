// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// matchSchema: ensemble des attribut de modele dans la base de données
const circuitSchema = mongoose.Schema({
    // S mta3 string kbira 5ater ne5dmo fi dossier.js
    name: String,
    programme: String,
    date: String,
    guide: String,
    place: String //attribut pour image
});
// Match: nom de modele dans mla base de donnés 
const circuit = mongoose.model('Circuit', circuitSchema);

// exportina les variable mta3 match bech ki njib 7aja mil front na3ref win nemchi
module.exports = circuit;