const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes.js');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@banco.sooca.mongodb.net/basisgenetic?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);


app.listen(3333);