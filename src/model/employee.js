import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../db/db.js";

class Employee extends Model {
    // static init(sequelize, DataTypes){
    //     return super.init(
    //         {
    //             first_name:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             last_name:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             email:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             phone:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             organization:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             designation:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             salary:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             status:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             created_at:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },
    //             updated_at:{
    //                 type: DataTypes.STRING,
    //                  allowNull: false
    //             },

    //         }
    //     )
    // }
}


Employee.init({
    first_name:{
        type: DataTypes.STRING,
         allowNull: false
    },
    last_name:{
        type: DataTypes.STRING,
         allowNull: false
    },
    email:{
        type: DataTypes.STRING,
         allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
         allowNull: false
    },
}, 
{
    sequelize,
    tableName: 'employees',
    timestamps:false
})
export default Employee;