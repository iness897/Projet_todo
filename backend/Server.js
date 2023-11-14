const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/router')
require('dotenv').config()

const app = express()
const PORT =  3005


app.use(cors());

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connecté à MongoDB`))
  .catch((err) => console.log(err))

app.use(routes)

app.listen(PORT)

