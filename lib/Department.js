class Department { 
    constructor(Name) {
    this.Name = Name;
}

getName() {
    return {
        name: this.Name
    };
}
}

module.exports = Department;