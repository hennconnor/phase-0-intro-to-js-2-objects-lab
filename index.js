const employee = {name: "Sam", streetAddress: "11 Broadway"};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
return updatedEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}



function deleteFromEmployeeByKey(employee, key){
    const employeeCopy = {...employee};
    delete employeeCopy[key];
    return employeeCopy;
}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}