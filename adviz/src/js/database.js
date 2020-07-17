
export class databaseConnector{
    constructor() {
        // alert( title );
    }
  
    connectToDB(){
        let mysql      = require('mysql');
        let connection = mysql.createConnection({
            host     : 'localhost',
            database : 'adviz',
            user     : 'root',
            password : '12345',
        }); 
        connection.connect(function(err) {
            if (err) {
                console.error('Error connecting: ' + err.stack);
                return;
            }
        
            console.log('Connected as id ' + connection.threadId);
        });

        connection.query('SELECT * FROM users', function (error, results, fields) {
            if (error)
                throw error;
        
            results.forEach(result => {
                alert(result);
                // console.log(result);
            });
        });
        
        connection.end();
    } 
  
    insert() {
       
    }

    select() {
       
    }

    update() {
       
    }

    delete() {
       
    }
  
  
  }



//   let mysql      = require('mysql');
//   let connection = mysql.createConnection({
//     host     : 'localhost',
//     database : 'dbname',
//     user     : 'username',
//     password : 'password',
// });

// connection.connect(function(err) {
//     if (err) {
//         console.error('Error connecting: ' + err.stack);
//         return;
//     }

//     console.log('Connected as id ' + connection.threadId);
// });

// connection.query('SELECT * FROM employee', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// connection.end();