// *** INSTRUCTIONS ***
// =====================================

// [x] Should require basic npm packages (express and path)
// Note: Added 'body-parser' after watching the video walkthrough

// *** DEPENDENCIES ***
// =====================================
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

// *** EXPRESS APP ***
// =====================================
var app = express()
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json({ type: 'application/*+json'}))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html'}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

