var express = require('express');
var router = express.Router();
var json = require('./Cars.json')
const database = require('../database')





// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.post('/login', function (request, response, next){
//   const user_email = request.body.user_email_address
//   const user_password = request.body.user_password

//   if (user_email && user_password){
//     myQuery = `
//       SELECT * FROM Person
//       WHERE email = "${user_email}"
//     `;

//     database.query(myQuery, function (error, data){
//       if (data.length > 0) {
//         if (data[0].password === user_password) {
//           console.log('Welcome to the Place')
//           response.redirect('/');
//         } else {
//           console.log('Please Enter Correct Password!')
//           response.send('Inccorect Passowrd')
//         }
//       } else {
//         console.log('Inccorect Email')
//         response.send('Incorrect Email')
//       }
//     })
//   }

// })

// module.exports = router;
