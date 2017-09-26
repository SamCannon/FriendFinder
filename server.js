const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'type/*+json'}));
app.use(bodyParser.raw({type: 'type/vnd.custom-type'}));
app.use(bodyParser.text({type: 'text/html'}));

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function() {

	console.log("Listening on port: ", PORT);
		
});