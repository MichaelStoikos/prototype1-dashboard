const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');
const config = require("./config.json");
const port = process.env.port || 3000;
const url = config.final_url;

const client = new MongoClient(url);
const dbName = "Prototype1-Dashboard"
const dbCollection1 = "cityBudget"
const dbCollection2 = "departments"
const dbCollection3 = "energyConsumption"
const dbCollection4 = "serviceRequest"
const dbCollection5 = "services"

app.use(cors());
app.use(express.json());

client
	.connect()
	.then(() => {
		db = client.db(dbName);
		console.log("MongoDB connected");
	})
	.catch((err) => {
		console.error("MongoDB connection error:", err.message);
		process.exit(1);
	});

app.get('/cityBudget', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(dbCollection1);

        const budget = await collection.find({}).toArray();
        res.json({
            message: "Successfully fetched all the data",
            data: budget,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
})

app.get('/departments', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(dbCollection2);

        const budget = await collection.find({}).toArray();
        res.json({
            message: "Successfully fetched all the data",
            data: budget,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
})

app.get('/energyConsumption', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(dbCollection3);

        const budget = await collection.find({}).toArray();
        res.json({
            message: "Successfully fetched all the data",
            data: budget,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
})

app.get('/serviceRequests', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(dbCollection4);

        const requests = await collection.find({}).toArray();
        res.json({
            message: "Successfully fetched all the data",
            data: requests,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
})

app.get('/services', async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(dbCollection5);

        const service = await collection.find({}).toArray();
        res.json({
            message: "Successfully fetched all the data",
            data: service,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});