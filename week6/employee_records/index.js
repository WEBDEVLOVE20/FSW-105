const employees = [];

function Employee (name, jobtitle, salary) {
    this.name = name;
    this.jobtitle = jobtitle;
    this.salary = salary;
    this.status = "Full Time";
}
    printEmployeeForm = function(){
        console.log(employee3);
    
    }
/*
class SepEmployeeStatus extends Employee{
    constructor(name, jobtitle, salary, sepstatus){
        super(name, jobtitle, salary)
        this.sepstatus = sepstatus;
    }
} */



const employee1 = new Employee("Jim", "Developer", 150000);
const employee2 = new Employee("Karen", "Admin Assistant", 55000);
const employee3 = new Employee("Rocky", "Manager", 98000, "Part Time");




printEmployeeForm(employee1)
printEmployeeForm(employee2)
printEmployeeForm(employee3) 