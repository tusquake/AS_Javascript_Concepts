// Example: Prototypal Inheritance in JavaScript
// Creating an object with properties and a method
let object = {
    name: "Akshay",
    city: "Dehradun",
    getIntro: function () {
        console.log(this.name + " from " + this.city);
    }
};

// Another object
let object2 = {
    name: "Aditya",
    city: "Hyderabad"
};

// BAD PRACTICE: Using __proto__ directly (works but not recommended)
// This sets object as the prototype of object2
//! let proto = object2.__proto__ = object;


let safeObject2 = Object.create(object);
safeObject2.name = "Aditya";
safeObject2.city = "Hyderabad";
safeObject2.getIntro(); // Output: Aditya from Hyderabad


// Now object2 inherits getIntro from object
object2.getIntro(); // Output: Aditya from Hyderabad

/* 
================ THEORY =================
1. **Prototypal Inheritance**:
   - In JavaScript, every object has an internal link to another object called its "prototype".
   - If you try to access a property/method that doesn't exist on the object itself,
     JavaScript looks up the prototype chain.

2. **The `__proto__` Property**:
   - `__proto__` is an internal property that points to the object's prototype.
   - It's now considered deprecated for direct use (for performance and maintainability reasons).
   - Instead, you should use:
       - `Object.create(protoObj)` → Creates a new object with the specified prototype.
       - `Object.setPrototypeOf(obj, protoObj)` → Sets the prototype of an existing object.

3. **How the Example Works**:
   - `object` defines `getIntro`.
   - `object2` initially has no `getIntro`.
   - By setting `object2.__proto__ = object`, we link them so `object2` inherits from `object`.
   - Calling `object2.getIntro()` finds the method in `object` and executes it with `object2`’s `this`.

4. **Why 'Never Do This' is Written**:
   - Modifying `__proto__` directly can cause performance issues and unexpected behavior.
   - It's better to use modern, safe methods like `Object.create` or `Object.setPrototypeOf`.

*/
