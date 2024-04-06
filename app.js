'use strict';
var employeeArr = [];
function Employee(employeeId, fullName, department, level, imgUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imgUrl = imgUrl;
    employeeArr.push(this);
}
Employee.prototype.calculateSalary = function() {
    var min, max;
    if (this.level === "Senior") {
        min = 1500;
        max = 2000;
    } else if (this.level === "Mid-Senior") {
        min = 1000;
        max = 1500;
    } else if (this.level === "Junior") {
        min = 500;
        max = 1000;
    } else {
        console.error("Invalid employee level");
        return 0;  
    }
    return Math.floor(Math.random() * (max - min) + min);
}
Employee.prototype.calculateNetSalary = function() {
    const salary = this.calculateSalary();
    const tax = 0.075;
    const netSalary = salary - (salary * tax);
    this.salary = netSalary;
}
function render() {
    const container = document.getElementById('employees');
    container.innerHTML = '';  
    for (let i = 0; i < employeeArr.length; i++) {
        const card = document.createElement('div');
        card.className = 'employee-card';
        const imgContainer = document.createElement('div');
        imgContainer.className = 'img-container';
        const img = document.createElement('img');
        img.src = employeeArr[i].imgUrl;
        img.alt = `Picture of ${employeeArr[i].fullName}`;
        imgContainer.appendChild(img);
        const infoContainer = document.createElement('div');
        infoContainer.className = 'info-container';
        const nameId = document.createElement('p');
        nameId.textContent = `Name: ${employeeArr[i].fullName} - ID: ${employeeArr[i].employeeId}`;
        const departmentLevel = document.createElement('p');
        departmentLevel.textContent = `Department: ${employeeArr[i].department} - Level: ${employeeArr[i].level}`;
        const salary = document.createElement('p');
        salary.textContent = `Salary: $${employeeArr[i].salary.toFixed(2)}`;
        infoContainer.appendChild(nameId);
        infoContainer.appendChild(departmentLevel);
        infoContainer.appendChild(salary);
        card.appendChild(imgContainer);
        card.appendChild(infoContainer);
        container.appendChild(card);
    }
};
function updateLocalStorage() {
    let jsonEmployee = JSON.stringify(employeeArr);
    localStorage.setItem("addNewEmployee", jsonEmployee);
}
function getEmployee() {
    let jsonEmployee = localStorage.getItem("addNewEmployee");
    if (jsonEmployee) {
        employeeArr = JSON.parse(jsonEmployee);
    } else {
        employeeArr = [];
    }
}
function init() {
    getEmployee();
    if (employeeArr.length == 0) {
        
        new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', 'img/Ghazi.jpg');
        new Employee(1001, 'Lana Ali', 'Finance', 'Senior', 'img/Lana.jpg');
        new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', 'img/Tamara.jpg');
        new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', 'img/Safi.jpg');
        new Employee(1004, 'Omar Zaid', 'Development', 'Senior', 'img/Omar.jpg');
        new Employee(1005, 'Rana Saleh', 'Development', 'Junior', 'img/Rana.jpg');
        new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', 'img/Hadi.jpg');
        updateLocalStorage();
    }
    render();
}
let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewEmployeeHandler);
function addNewEmployeeHandler(event) {
    event.preventDefault();
    const employeeId = generateEmployeeId();
    let fullName = document.getElementById('fullName').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('level').value;
    let imageUrl = document.getElementById('imageUrl').value;
    new Employee(employeeId, fullName, department, level, imageUrl);
    updateLocalStorage();
    render();
}
function generateEmployeeId() {
    return Math.floor(1000 + Math.random() * 9000);
}
init(); 