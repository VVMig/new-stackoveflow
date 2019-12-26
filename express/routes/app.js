const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET cities page. */
router.get('/cities', (req, res) => {
   var cities = [ 
       { "user": faker.name.findName(),"question":"How to download game?"}, 
  	   { "user": faker.name.findName(),"question":"Where we write int main()?"},
       { "user": faker.name.findName(),"question":"How to learn JavaScript"}
  	];

    res.render('cities', 
  			{ "cities": cities}
  	);
});


module.exports = router;
