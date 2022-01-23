// 3. Write a “person” class to hold all the details.


function Person() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var person1 = new Person();
person1.firstName = "Kalai";
person1.lastName = "vani";
            
console.log(person1.firstName + " " + person1.lastName);

var person2 = new Person();
person2.firstName = "Swathi";
person2.lastName = "Sharu";
            
console.log(person2.firstName + " " + person2.lastName );