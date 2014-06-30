var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var jwt_secret = 'foo bar big secret';

/* GET home page. */
router.get('/', function(req, res) {
  //res.render('login', { title: 'Express' , room_code : '', user_name : ''});
    res.render('login');
});

router.post('/', function(req, res) {

  console.log (req.body.user_name);

    var profile = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        id: 123
    };

    var token = jwt.sign(profile, jwt_secret, { expiresInMinutes: 60*5 });

  res.cookie('token', token);
  res.json({token:token});
//  res.cookie('user_name', req.body.user_name);
//  res.redirect(301, '/poker');
})


router.post('/check' ,function(req, res) {

})

module.exports = router;
