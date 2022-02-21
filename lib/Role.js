class Role {
    constructor(title, salary, department_id) {
        this.title = title;
        this.salary =  salary;
        this.department_id = department_id;
    }

    getTitle() {
        return {
            name: this.title
        };
    }

    getSalary() {
        return {
            name: this.salary
        };
    }

    getDepartment_ID() {
        return {
            name: this.department_id
        }
    }
}

    module.exports = Role;