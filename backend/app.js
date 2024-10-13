const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');
const config = require('./config.json');
const port = process.env.port || 3000;
const url = config.final_url;

const client = new MongoClient(url);
const dbName = 'Prototype1-Dashboard';

let db;

app.use(cors());
app.use(express.json());

client
    .connect()
    .then(() => {
        db = client.db(dbName);
        console.log('MongoDB connected');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

app.get('/cityBudget', async (req, res) => {
    try {
        const collection = db.collection('cityBudget');
        const budget = await collection.find({}).toArray();
        res.json({
            message: 'Successfully fetched all the data',
            data: budget,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/departments', async (req, res) => {
    try {
        const collection = db.collection('departments');
        const data = await collection.find({}).toArray();
        res.json({
            message: 'Successfully fetched all the data',
            data: data,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/energyConsumption', async (req, res) => {
    try {
        const collection = db.collection('energyConsumption');
        const data = await collection.find({}).toArray();
        res.json({
            message: 'Successfully fetched all the data',
            data: data,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/serviceRequests', async (req, res) => {
    try {
        const collection = db.collection('serviceRequests');
        const requests = await collection.find({}).toArray();
        res.json({
            message: 'Successfully fetched all the data',
            data: requests,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/services', async (req, res) => {
    try {
        const collection = db.collection('services');
        const services = await collection.find({}).toArray();
        res.json({
            message: 'Successfully fetched all the data',
            data: services,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
