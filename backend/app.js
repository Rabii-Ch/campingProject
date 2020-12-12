const express = require('express');

const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Circuit = require('./models/circuit');
const Guide = require('./models/guide');
const User = require('./models/user');
const Materiel = require('./models/materiel');

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

// GUIDE
app.get('/allGuides', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    Guide.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all guides',
                guides: docs
            });
        }

    });


});

app.post('/addGuide', (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');

    // creation d'un objet pour inserer dans la base de donnée
    const guide = new Guide({
            fName: req.body.fName,
            lName: req.body.lName,
            tel: req.body.tel,
            description: req.body.description
        })
        // nsejlo l'objet mta3na
    guide.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added successfuly',
            })
        }
    });
});

app.delete('/deleteGuide/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    Guide.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayGuide/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    Guide.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    guide: data
                })
            }
        }
    )

});

app.put('/editGuide/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const guide = new Guide({
            _id: req.body._id,
            fname: req.body.fName,
            lName: req.body.lName,
            tel: req.body.tel,
            description: req.body.description
        })
        // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    Guide.update({ _id: req.params.id }, guide).then(
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

// USER

// jena request 3al all users

app.get('/allUsers', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    User.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all users',
                users: docs
            });
        }

    });


});

app.post('/addUser', (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');

    // creation d'un objet pour inserer dans la base de donnée
    const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            pwd: req.body.pwd,

        })
        // nsejlo l'objet mta3na
    user.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'user added successfuly',
            })
        }
    });
});

app.delete('/deleteUsers/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    User.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayUser/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    User.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    user: data
                })
            }
        }
    )

});

app.put('/editUser/:id', (req, res) => {
    const user = new User({
        // meynejem ysob ken bil identifiant
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: req.body.pwd,
        confirmPwd: req.body.confirmPwd
            // image: url + '/images/' + req.file.filename
    });

    console.log('edited object user', user);
    // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    User.update({ _id: req.params.id }, user).then(
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

//MATERIEL
app.get('/allMateriels', (req, res) => {
    // c'est le traitement ici
    console.log('am here');
    // connect to db and get all matches
    Materiel.find((err, docs) => {
        if (err) {
            console.log('Error', err);
        } else {
            // reponse de serveur lil front end
            res.status(200).json({
                message: 'here all materiels',
                materiels: docs
            });
        }

    });


});


app.post('/addMateriel', (req, res) => {
    // c'est le traitement ici
    console.log(' here adding');

    // creation d'un objet pour inserer dans la base de donnée
    const materiel = new Materiel({
            pName: req.body.pName,
            ref: req.body.ref,
            qty: req.body.qty,
            price: req.body.price,
            description: req.body.description
        })
        // nsejlo l'objet mta3na
    materiel.save().then((result) => {
        if (result) {
            res.status(200).json({
                message: 'added successfuly',
            })
        }
    });
});

app.delete('/deleteMateriel/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in delete', req.params.id);
    Materiel.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                res.status(200).json({
                    message: 'delete successfully'
                })

            }
        }
    )
});

app.get('/displayMateriel/:id', (req, res) => {
    // 9a3din naba3tho fil id dynamique 
    console.log('here in get', req.params.id);
    // Match.findOne : 9olnelo lawej 
    Materiel.findOne({ _id: req.params.id }).then(
        data => {
            // if data existe
            if (data) {
                res.status(200).json({
                    materiel: data
                })
            }
        }
    )

});

app.put('/editMateriel/:id', (req, res) => {
    console.log('here in edit', req.params.id);
    const materiel = new Materiel({
            _id: req.body._id,
            pName: req.body.pName,
            ref: req.body.ref,
            qty: req.body.qty,
            price: req.body.price,
            description: req.body.description
        })
        // fonction update mche lawej 3al id ili 3ando req.params.id w 3awdho bil match
    Materiel.update({ _id: req.params.id }, materiel).then(
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