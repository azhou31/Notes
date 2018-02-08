var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var path = require('path');

app.use(express.static(path.join(__dirname, 'client','notes','dist')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
let routes_setter=require('./server/config/routes.js');
routes_setter(app);

app.listen(8000,()=>{
    console.log("Running on port 8000");
})