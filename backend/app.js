const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Circuit = require('./models/circuit');

const mongoose = require('mongoose');

const path = require('path');

mongoose.connect('mongodb://localhost:27017/campingDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

//CIRCUIT
app.get('/allCircuit', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    Circuit.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all circuits',
                circuits: docs
            });
        }

    });


});


app.post('/addCircuit', (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');

    // creation d'un objet pour inserer dans la base de donnée
    const circuit = new Circuit({
            name: req.body.name,
            programme: req.body.programme,
            date: req.body.date,
            guide: req.body.guide,
            place: req.body.place,
            price: req.body.price

        })
        // nsejlo l'objet mta3na
    circuit.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added successfuly',
            })
        }
    });
});

app.delete('/deleteCircuit/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    Circuit.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayCircuit/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    Circuit.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    circuit: data
                })
            }
        }
    )

});

app.put('/editCircuit/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const circuit = new Circuit({
            _id: req.body._id,
            name: req.body.name,
            programme: req.body.programme,
            date: req.body.date,
            guide: req.body.guide,
            place: req.body.place,
        })
        // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    Circuit.update({ _id: req.params.id }, circuit).then(
        // ba3d meya3mil modification l base de données tolik ahawa resultat 
        result => {
            if (result) {
                res.status(200).json({
                    message: 'update successfully'
                })
            }
        }
    )
});








module.exports = app;