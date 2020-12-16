// importer le dossier mongoose pour creation de la base de données
const mongoose = require('mongoose');
// matchSchema: ensemble des attribut de modele dans la base de données
const reservationSchema = mongoose.Schema({
    // S mta3 string kbira 5ater ne5dmo fi dossier.js
    pName: String,
    qty: String,
    price: String,
    userID: String,
    materielID: String

});
// Match: nom de modele dans mla base de donnés 
const reservation = mongoose.model('Reservation', reservationSchema);

// exportina les variable mta3 match bech ki njib 7aja mil front na3ref win nemchi
module.exports = reservation;