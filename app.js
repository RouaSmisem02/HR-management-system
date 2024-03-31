'use strict';
function Employee(employeeId, fullName, department, level, imgUrl) {
    this.employeeId = employeeId
    this.fullName = fullName
    this.department = department
    this.level = level
    this.imgUrl = imgUrl
}

Employee.prototype.calculateSalary = function () {
    var min, max
    if (this.level == "Senior") {
        min = 1500
        max = 2000
    } else if (this.level == "Mid-Senior") {
        min = 1000
        max = 1500
    } else if (this.level == "Junior") {
        min = 500
        max = 1000
    } else {
        console.log("Invalid employee level")
    }

    return Math.floor(Math.random() * (max - min) + min)
}

Employee.prototype.calculateNetSalary = function () {
    const salary = this.calculateSalary()
    const tax = 0.075
    const netSalary = salary - (salary * tax) //This the website that I take the formula from it (https://goniyo.com/salary-calculator/) 
    this.salary = netSalary
}

Employee.prototype.render = function () {
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
Employee.prototype.render = function () {
    const container = document.getElementById('employees');
    const card = document.createElement('div');
    card.className = 'employee-card';
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';
    const img = document.createElement('img');
    img.src = this.imgUrl;
    img.alt = `Picture of ${this.fullName}`;
    imgContainer.appendChild(img);
    const infoContainer = document.createElement('div');
    infoContainer.className = 'info-container';
    const nameId = document.createElement('p');
    nameId.textContent = `Name: ${this.fullName} - ID: ${this.employeeId}`;
    const departmentLevel = document.createElement('p');
    departmentLevel.textContent = `Department: ${this.department} - Level: ${this.level}`;
    const salary = document.createElement('p');
    salary.textContent = this.salary.toFixed(2);
    infoContainer.appendChild(nameId);
    infoContainer.appendChild(departmentLevel);
    infoContainer.appendChild(salary);
    card.appendChild(imgContainer);
    card.appendChild(infoContainer);
    container.appendChild(card);
};
let GhaziEmployee = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'img/Ghazi.jpg');
let LanaEmployee = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'img/Lana.jpg');
let TamaraEmployee = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'img/Tamara.jpg');
let SafiEmployee = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'img/Safi.jpg');
let OmarEmployee = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'img/Omar.jpg');
let RanaEmployee = new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'img/Rana.jpg');
let HadiEmployee = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'img/Hadi.jpg');

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

/////////////Lab08/////////////

function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000)
}

let employeeForm = document.getElementById("employeeForm")

employeeForm.addEventListener('submit', addNewEmployeeHandler)
function addNewEmployeeHandler(event) {
    event.preventDefault();
    const employeeId = generateEmployeeId();
    let fullName = document.getElementById('fullName').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('level').value;
    let imageUrl = document.getElementById('imageUrl').value;

    let newEmployee = new Employee(employeeId, fullName, department, level, imageUrl);
    newEmployee.calculateNetSalary();
    newEmployee.render();
}