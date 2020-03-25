//Node Connection to MySQL

var mysql = require ('mysql');

var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'dkhcrqtr7mh8ldes',
		password: 'r2peytmwlt7owxn0',
		database: 'cvuvzlpkudv10f9s'
	});
};







connection.connect(function(err) 
{
  if (err) 
  {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

