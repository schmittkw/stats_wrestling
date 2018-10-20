const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const port = 8000;
const app = express();

//middleware
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())
app.use(express.static(__dirname + '/public/dist'))
app.use(session({
    secret: 'doesntmatterwhatyoutypehere',
    resave: false,
    saveUninitialized: true,
}))
app.use(morgan('tiny'));
//mongoose file
require('./server/config/mongoose');
//routes
require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}...`));
