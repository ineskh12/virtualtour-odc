const express = require("express");
const helmet = require("helmet");
const mongoose = require('mongoose');
var path = require('path'); 

const userRouter = require('./app/routes/users.routes');
const bodyParser = require('body-parser');
const cors = require('cors');
// create express app
const app = express();
app.use(helmet());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

// Configuring the database



app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,authorization,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

mongoose.Promise = global.Promise;
// Connecting to the database

mongoose.connect('mongodb+srv://ines07:cr7bale11rmd@cluster0.7mpfm.mongodb.net/virtualodc?retryWrites=true&w=majority', {
    useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true,useFindAndModify:false
}).then(() => {
   // console.log(process.env.Url )

    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Virtual ODC application."});
});


//console.log(process.env.PORT)
require('./app/routes/characters.routes')(app);
//require('./app/routes/users.routes.js')(app);
app.use(userRouter);
// listen for requests
app.listen(process.env.PORT || 3001, () => {
    console.log("Server is listening on port 3001");
});


