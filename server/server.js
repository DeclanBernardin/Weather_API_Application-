require ('dotenv').config()
const express = require('express'); 
const app = express();
const bodyParser = require('body-parser');  

// Routes Origin 
const searchRouter = require('./routes/search.router')

// Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static files
app.use(express.static('build'));

// Routes
app.use('/api/search', searchRouter)

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`on port: ${PORT}`)
});