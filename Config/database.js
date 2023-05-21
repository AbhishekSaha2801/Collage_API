//Import mongoose for connection server to database : MONGO DB
const mongoose = require('mongoose');
require('dotenv').config();
//Now Connect
exports.dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => {console.log('Database Connection is Successful')})
    .catch((error) => {console.error(error); console.log('Database Connection is Not Successful');})
}