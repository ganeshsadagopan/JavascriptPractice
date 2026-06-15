
export class Tester
{
    static CompanyCode=1001

    employeeName=null
    employeeId=null

    get EmployeeCompanyName()
    {
        return "UPS"
    }

    constructor(empName, empId)
    {
        this.employeeName=empName
        this.employeeId=empId
    }

    displayEmployeeDetails()
    {
        console.log("Employee Name: "+this.employeeName)
        console.log("Employee Id: "+this.employeeId)
        console.log("Company Code: "+Tester.CompanyCode)
        console.log("Company Name: "+this.EmployeeCompanyName)
    }


}