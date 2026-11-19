import { Tester } from "./TestClass.js";

let employee = new Tester("Rahul", 2001);
employee.displayEmployeeDetails();

console.log("Company Name: " + employee.EmployeeCompanyName);
console.log("Company Code: " + Tester.CompanyCode);

class game extends Tester
{
    constructor(empName, empId)
    {
        super(empName, empId)
    }

    
}

let gameobj = new game("Sachin", 3001);
gameobj.displayEmployeeDetails();