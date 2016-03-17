(function() {
    "use strict";

    var express = require('express');
    var app = express();
    var port = process.env.PORT || 8080;

    app.use(express.static(__dirname + '/dist/'));

    // The advantages of using JavaScript for full stack development with an emphasis on Node.js (Ronan Connolly, 2015)
    app.get('/js-advantages-in-fullstack-dev', function(req, res){
        res.sendfile(__dirname + '/external-docs/js-advantages-in-fullstack-dev-ronanconnolly-2015.pdf');
    });

    app.listen(port, function() {
        console.log('Our app is running on port: ' + port);
    });
})();
