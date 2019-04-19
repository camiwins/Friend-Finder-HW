// *** INSTRUCTIONS ***
// =====================================

// * Include two routes
// * GET route to /survey which should display survey page
// * Default catch-all route that leads to home.html which displays home page

// *** DEPENDENCIES ***
// =====================================

var path = require("path");

// *** ROUTES ***
// =====================================

module.exports = function (app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
}