class Person {
	constructor(name,age){
		this.name=name,
		this.age=age
	}

	greet(){
		return `Hello, my name is ${this.name}, I am ${this.age} years old.`
	}
}

class Employee extends Person{
	constructor(name, age, jobTitle){
		super(name,age)
		this.jobTitle = jobTitle
	}

	jobGreet(){
		return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`
	}
}

function Person(name, age){
	let person1 =new Person(name, age)
	console.log(person1.greet());
}


function Employee(name, age, jobTitle){
	let emp = new Employee(name, age, jobTitle);
	console.log(emp.jobGreet());
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
