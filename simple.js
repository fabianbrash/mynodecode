/*Simple app to connect to and return all the values in a rethinkdb */

var r = require('rethinkdb');

var connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err,conn) {
  if(err) throw err;

  connection = conn;


r.db('NASA').table('peopleinspace').run(connection, function(err, cursor) {


  cursor.toArray(function(err, result) {
    if(err) throw err;

    console.log(JSON.stringify(result, null, 2));
  });

 });

});
