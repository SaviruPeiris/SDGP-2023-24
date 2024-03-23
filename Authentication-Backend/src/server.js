const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./../config/db')
const { errorHandler } = require('./middleware/error.middleware')
const port = process.env.PORT || 3000;
const routesV1 = require('./routes/v1')
const cors = require('cors');
const i18n = require("i18n");

i18n.configure({
    locales: ['en'],
    directory: __dirname + '/locales'
});

connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use('/api/v1', routesV1);
app.get('/', (req, res) => {
    res.send('OK')
})

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));