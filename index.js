const express = require('express');
const app = express();

//Add Middle Ware
app.use(express.json());

//Create Api Route
const router = require('./Routes/Roter');
app.use('/api/v1',router);

//Listen at Port
require('dotenv').config();
const port = process.env.PORT || 9000;
app.listen(port,() => {
    console.log(`Server Started at Port : ${port}`);
})

//Connect with DB
require('./Config/database').dbConnect();