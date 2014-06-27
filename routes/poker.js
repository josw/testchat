var express = require('express');
var router = express.Router();

var rooms = {};

router.get('/', function(req, res) {








    var user_name = req.body.user_name;
    var room_code = req.body.room_code;

    res.render('poker');
});

router.get('/', function(req, res) {
    req.query.room_code;
})

module.exports = router;