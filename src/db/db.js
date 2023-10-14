import Sequelize from "sequelize";
import {db_config} from "./connection.js"

export default  new Sequelize(db_config.database, db_config.user, db_config.password, {
    dialect:'mysql',
    port:3306
})




// const sequelize = new Sequelize(
//     db_config.database, db_config.user, db_config.password, {
//             dialect:'mysql',
//             port:3306
//         }
//   );

// sequelize.authenticate().then(() => {
//    console.log('Connection has been established successfully.');
// }).catch((error) => {
//    console.error('Unable to connect to the database: ', error);
// });

// export default sequelize;