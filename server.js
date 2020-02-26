const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 4000;

//Initialize DB
const db = require('./models');

//Initialize Routes
const routes = require('./routes');

//Initialize BodyParser
app.use(bodyParser.json());

//////////////////////////////////////
///////       VIEW ROUTES     ///////
////////////////////////////////////

app.use('/', routes.views);

//////////////////////////////////////
////////       API ROUTES    ////////
////////////////////////////////////

app.use('/api/v1', routes.api);

//API Error 404
app.use('/api/*',(req, res) => {
    res.status(404).json({status: 404, error: 'Error 404: resource not found'});
});

// HTML Error 404
app.use('*', (req, res) => {
    res.send('<h2> Error 404: Not Found</h2>');
});
  
//////////////////////////////////////
///////       START SERVER    ///////
////////////////////////////////////

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}!`));
