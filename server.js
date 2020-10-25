require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/hygiaApi",
    { useNewUrlParser: true, useUnifiedTopology: true },
).then(() => {
    console.log('Database successfully connected');
}).catch(() => {
    console.log('ops... Cannot connect to database');
});

requireDir('./src/models');


app.use('/hygiaApi', require('./src/routes'));

app.listen(3001);