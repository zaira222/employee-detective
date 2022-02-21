class Employee { 
    constructor(first_name, last_name, role, manager) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.role = role;
    this.manager = manager;
}

getFirstName() {
    return {
        name: this.first_name
    };
}
getLastName() {
    return {
        name: this.last_name
    }
}
getRole() {
    return {
        name: this.role
    }
}
getManager() {
    return {
        name: this.manager
    }
}
}

module.exports = Employee;