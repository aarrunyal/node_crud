import Employee from '../model/employee.js';

export default class EmployeeService{
    
    constructor(){
        this.apiUrl = `${process.env.API_URL}\employee`
    }

   async index(){
     return await Employee.findAll();
    }

    // all(){

    // }

   async show(id){
        return await Employee.findByPk(id);
    }

    async create(data){
        return await Employee.create(data);
    }

    async update(id, data){
        return await Employee.findByPk(id).then((employee)=>{
            employee.update(data);
        }).catch(error=>{
            return error
        });
        // console.log(data)
        // console.log(id)
        // return await Employee.update(data, {
        //     where:{
        //         id:id
        //     }
        // })
    }

    async delete(id){
        return await Employee.findByPk(id).then((employee)=>{
            employee.destroy();
        }).catch(error=>{
            return error
        });
    }


}