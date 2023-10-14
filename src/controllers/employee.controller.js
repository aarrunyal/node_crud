import EmployeeService from "../service/employee.service.js";
import HttpResponseEntity from "../config/response.js";
import Employee from "../model/employee.js";

const employeeService = new EmployeeService();
const responseEntity = new HttpResponseEntity();

const EmployeeController = {
    index: ((req, res)=>{
        employeeService.index().then((response)=>{
            res.send(responseEntity.success(response))
        }).catch((error)=>{
            res.send(responseEntity.error())
        })
    }),

    show: ((req, res)=>{
        employeeService.show(req.params.id).then((response)=>{
            res.send(responseEntity.success(response))
        }).catch((error)=>{
            res.send(responseEntity.error())
        })
    }),
    create:((req, res)=>{
        let employee = {};
        employee.first_name = req.query.first_name
        employee.last_name = req.query.last_name
        employee.email = req.query.email
        employee.phone = req.query.phone
        employeeService.create(employee).then((response)=>{
            res.send(responseEntity.success())
        }).catch((error)=>{
            res.send(responseEntity.error(error))
        })
    }),

    update:((req, res)=>{
        employeeService.update(req.params.id, req.query).then((response)=>{
            res.send(responseEntity.success())
        }).catch((error)=>{
            res.send(responseEntity.error(error))
        })
    }),

    delete:((req, res)=>{
        employeeService.delete(req.params.id).then((response)=>{
            res.send(responseEntity.success())
        }).catch((error)=>{
            res.send(responseEntity.error(error))
        })
    })
    
}

export default EmployeeController;