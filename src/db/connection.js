// import Sequelize from 'sequelize';

// const connection = new Sequelize (
//     process.env.DB_NAME,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD,
//     {
//         host :process.env.DB_HOST,
//         dialect:'mysql'
//     }
// );
// export default connection

import mysql from 'mysql2';

export const db_config =  {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'db',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'employees',
  port : 3306
}

const connection = mysql.createConnection(db_config);
 
connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});
export default connection;