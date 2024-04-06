'use strict';
function getEmployeesFromStorage() {
    var jsonData = localStorage.getItem("addNewEmployee");
    if (jsonData) {
        return JSON.parse(jsonData);
    } else {
        return [];
    }
}
function calculateDepartmentStats(employees) {
    var departments = {};
    for (var i = 0; i < employees.length; i++) {
        var employee = employees[i];
        var departmentName = employee.department;
        if (!departments[departmentName]) {
            departments[departmentName] = {
                count: 0,
                totalSalary: 0,
            };
        }
        departments[departmentName].count++;
        departments[departmentName].totalSalary += employee.salary;
    }
    var keys = Object.keys(departments);
    for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        var dept = departments[key];
        dept.averageSalary = dept.totalSalary / dept.count;
    }
    return departments;
}
function renderTable(departments) {
    var tableContainer = document.getElementById('employee-table'); 
    var table = document.createElement('table');
    table.style.width = '80%';
    table.style.margin = '20px auto';
    table.style.borderCollapse = 'collapse';
    table.style.backgroundColor = '#F8F9FA';
    table.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    table.innerHTML = '<thead><tr style="background-color: #007BFF; color: white;"><th>Department</th><th># of Employees</th><th>Total Salary</th><th>Average Salary</th></tr></thead>';
    var tbody = document.createElement('tbody');
    var totalEmployees = 0;
    var totalSalary = 0;
    var departmentKeys = Object.keys(departments);
    for (var k = 0; k < departmentKeys.length; k++) {
        var department = departmentKeys[k];
        var dept = departments[department];
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + department + '</td><td>' + dept.count + '</td><td>$' + dept.totalSalary.toFixed(2) + '</td><td>$' + dept.averageSalary.toFixed(2) + '</td>';
        tr.style.textAlign = 'center';
        tbody.appendChild(tr);
        totalEmployees += dept.count;
        totalSalary += dept.totalSalary;
    }
    table.appendChild(tbody);
    var averageSalaryAll = totalSalary / totalEmployees;
    var tfoot = document.createElement('tfoot');
    tfoot.innerHTML = '<tr style="background-color: #28A745; color: white;"><th>Total</th><th>' + totalEmployees + '</th><th>$' + totalSalary.toFixed(2) + '</th><th>$' + averageSalaryAll.toFixed(2) + '</th></tr>';
    tfoot.style.textAlign = 'center';
    table.appendChild(tfoot);
    tableContainer.appendChild(table); 
}
document.addEventListener('DOMContentLoaded', function() {
    var employees = getEmployeesFromStorage();
    var departmentStats = calculateDepartmentStats(employees);
    renderTable(departmentStats);
});







