
// const { json } = require("express/lib/response");

let person = {
    name: "Abdelrahman",
    age: 18,
    city: "Cairo",
    hello: function() {
        console.log("Hello " + this.name);
    }
};
person.hello();


console.log(person.name);
person.age = 25;
console.log(person);
person.major = "Computer Science";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


let person2 = {};
Object.assign(person2, person, { job: "student" });
console.log(person2);

for (var key in person2) {
    console.log(key + ": " + person2[key]);
}

function Person(name, age, department) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.hello = function() {
        console.log("Hello " + this.name);
    }
}

let p1 = new Person("zoz", 24, "CS");
console.log(p1);
let p2 = new Person("smsm", 20, "history");
p2.hello();


function animal(name) {
    this.name = name;
}

animal.prototype.speak = function() {
    console.log(this.name + " makes a noise.");
}
console.log(animal.prototype);

function dog(name) {
    animal.call(this, name);
}

dog.prototype = Object.create(animal.prototype);
dog.prototype.constructor = dog;

dog.prototype.speak = function() {
    console.log(this.name + " barks.");
}

let d = new dog("dod");
d.speak();
let a = new animal("cat");
a.speak();

class animal1 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a noise.");
    }
}

class dog1 extends animal1 {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    speak() {
        console.log(this.name + " barks.");
    }
}

getinfo ()



let d1 = new dog1("doggy", "bulldog");
d1.getinfo()

console.log("task1");
setTimeout(function(){
    console.log("task2")
},2000)
console.log("task3");


let str = json.stringify(person2)
console.log(str)

let obj = json.parse(str)
console.log(obj)