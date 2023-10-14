import express from "express";
import EmployeeController from "../controllers/employee.controller.js";

const employee = express.Router();

employee.get('/employee', EmployeeController.index);
employee.get('/employee/:id', EmployeeController.show);
employee.get('/employee/create/user', EmployeeController.create);
employee.get('/employee/update/:id/user', EmployeeController.update);
employee.get('/employee/:id/delete', EmployeeController.delete);

export default employee;