const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/cars', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define a schema for car model
const carSchema = new mongoose.Schema({
    name: String,
    price: String
});

// Create a model for car
const Car = mongoose.model('Car', carSchema);

// Load data from cars.json to the database
const fs = require('fs');
const cars = JSON.parse(fs.readFileSync('./cars.json', 'utf8'));
Car.insertMany(cars, (err, docs) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Cars inserted successfully');
    }
});

// Define a route for getting all cars
app.get('/cars', (req, res) => {
    Car.find({}, (err, docs) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(docs);
        }
    });
});

// Define a route for getting cars by name
app.get('/cars/:name', (req, res) => {
    const name = req.params.name;
    Car.find({ name: new RegExp(name, 'i') }, (err, docs) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(docs);
        }
    });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
