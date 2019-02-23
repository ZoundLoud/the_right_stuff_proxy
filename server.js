var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require("morgan");
// var bodyparser = require('body-parser');
var app = express();

const port = process.env.PORT || 3003;

app.use(morgan('dev'));
app.use(cors());



app.use('/song/:id', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
});

