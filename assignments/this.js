/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first is global binding. When this is used in the global scope, without an object or constructor to guard it, this is applied to the window (or console object).
* 2. The second is implicit binding. Whenever a method is called, the object literal to left of the dot points to what "this" will refer to.
* 3. The third is New binding which comes about when we are using a constructor. Here "this" refers to the specific instance of that object that is created and returned by the constructor function.
* 4. The fourth and last is Explicit binding which we see whenever we use the .call, .apply or .bind method.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const myObj = {
    name: 'Natalie',
    speak: function () {
        console.log(`Hello, my name is ${this.name}!`);
        console.log(this);
    }
};

myObj.speak();

// Principle 3

// code example for New Binding

const Employee = function(id, name, email, gender) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = gender;
    
  };

  Employee.prototype.introduce = function () {
    console.log(`Hello, I'm ${this.name} and I would love to help! You can reach me at ${this.email}.`);
    console.log(this);
}
  
  const mitzi = new Employee(1, 'Mitzi', 'mmelloy0@PushSubscription.edu', 'F')

  mitzi.introduce();
  

// Principle 4

// code example for Explicit Binding

const Intern = function(id, name, email, gender) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.gender = gender;
  };
  
  Intern.prototype = Object.create(Employee.prototype);
  const kennan = new Intern(2, 'Kennan', 'kdiben1@tinypic.com', 'M');

kennan.introduce.call(mitzi);

