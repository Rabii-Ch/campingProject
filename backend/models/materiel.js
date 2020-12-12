// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// matchSchema: ensemble des attribut de modele dans la base de données
const materielSchema = mongoose.Schema({
    // S mta3 string kbira 5ater ne5dmo fi dossier.js
    pName: String,
    ref: String,
    qty: String,
    price: String,
    description: String

});
// Match: nom de modele dans mla base de donnés 
const materiel = mongoose.model('Materiel', materielSchema);

// exportina les variable mta3 match bech ki njib 7aja mil front na3ref win nemchi
module.exports = materiel;