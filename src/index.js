const express = require('express');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT;

const upload = require('./middleware/multer');
const middlewareLogRequest = require('./middleware/logs');

app.use(express.json());
app.use(middlewareLogRequest);
app.use(express.urlencoded({ extended:true}));
app.use('/assets', express.static('./public/images'));

app.listen(PORT, () =>{
    console.log("express API runningin port: " + PORT);
});