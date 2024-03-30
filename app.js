'use strict';
function Employee (employeeId, fullName, department, level, imgUrl){
    this.employeeId = employeeId
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imgUrl = imgUrl
}

Employee.prototype.calculateSalary = function(){
    var min, max
    if (this.level == "Senior") {
        min = 1500
        max = 2000
    }else if(this.level == "Mid-Senior"){
        min = 1000
        max = 1500
    }else if(this.level == "Junior"){
        min = 500
        max = 1000
    }else{
        console.log("Invalid employee level")
    }

    return Math.floor(Math.random() * (max - min) + min)
}

Employee.prototype.calculateNetSalary = function(){
    const salary = this.calculateSalary()
    const tax = 0.075
    const netSalary = salary - (salary*tax) //This the website that I take the formula from it (https://goniyo.com/salary-calculator/) 
    this.salary = netSalary   
}

Employee.prototype.render = function() {
    const container = document.getElementById('employees');
    console.log(container);
   
    const divEl = document.createElement('div');
    container.appendChild(divEl);
   
    const nameEl = document.createElement('h3');
    divEl.appendChild(nameEl);
    nameEl.textContent = this.fullName;
    
    const salaryEl = document.createElement('p');
    divEl.appendChild(salaryEl);
    salaryEl.textContent = `Net Salary: ${this.salary}$`;
    
    const hrEl = document.createElement('hr');
    divEl.appendChild(hrEl);
}

let GhaziEmployee = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'image-path');
let LanaEmployee = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'image-path');
let TamaraEmployee = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'image-path');
let SafiEmployee = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'image-path');
let OmarEmployee = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'image-path');
let RanaEmployee = new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'image-path');
let HadiEmployee = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'image-path');

GhaziEmployee.calculateNetSalary()
GhaziEmployee.render()
LanaEmployee.calculateNetSalary()
LanaEmployee.render()
TamaraEmployee.calculateNetSalary()
TamaraEmployee.render()
SafiEmployee.calculateNetSalary()
SafiEmployee.render()
OmarEmployee.calculateNetSalary()
OmarEmployee.render()
RanaEmployee.calculateNetSalary()
RanaEmployee.render()
HadiEmployee.calculateNetSalary()
HadiEmployee.render()