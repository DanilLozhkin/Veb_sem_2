const express = require("express");
const router2 = express.Router();

const { ObjectId } = require('mongodb');
router2.use(express.json())


const { findToArray, findOne, insertOne } = require('../services/servis');
//const { findToArray } = require('../configs/BD'); 
router2.use(express.static('public'));

router2.get('/comments', (req, res) => {
    findToArray().then(data => {
        res.status(200).json(data);
    })
});

router2.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    if (ObjectId.isValid(id)) {
        findOne(id).then(data => {
            res.status(200).json(data);
        })
    } else {
        res.status(404).send("404")
    }
});

router2.post('/comments', (req, res) => {
    // const { title, director,year,genres,rating } = req.body;
    // //console.log({ title, director,year,genres, rating});
    // insertOne({ title, director,year,genres, rating});
    // res.json()
    const { name, commit } = req.body;

    const now = new Date();
    const data = now.toLocaleString();

    insertOne({ name, commit, data });
    findToArray().then(data => {
        res.status(200).json(data);
    })
  
});


module.exports = router2;