const express = require('express');
const app = express();

// Model
require('./server/config/mongoose');
// End Model

const bodyParser = require('body-parser')
app.use(bodyParser.json());

var path = require('path');
app.use(express.static(path.join(__dirname, './client/dist/client')));

require('./server/config/routes')(app);

app.listen(8000, () => {
    console.log("listening on port 8000");
})
