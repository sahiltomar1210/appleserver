const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const DATABASE_URL='mongodb+srv://sahil:sahil@realestate.1jaxzuk.mongodb.net/Apple';
//connect to DB
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to Apple DB')
})


app.listen(8000, () => console.log('Server running at 8000'));