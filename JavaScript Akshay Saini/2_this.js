"use strict";

// this is global space

console.log(this); //globalObject - window, global

//this inside a function

function x(){
    ///the value depends on strict / nnon strict mode
    console.log(this)
}

//this inside non-strict mode - (this substitution)

// If the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode

// this keyword value depends on how the fucntion is called

x(); // undefined
window.x(); //window

// this inside a object's method

const student1 = {
    a: 10,
    name: "Tushar",
    printMyName: function(){
        console.log(this.name)
    }
}

const student2 = {
    a: 10,
    name: "Deepika",
    
}

student1.printMyName();
student1.printMyName.call(student2);

// obj.x();
//call apply bind methods (sharing methods)

// this inside arrow function

//this inside DOM


//? Arrow function don't provide their own this binding

const  obj2 = {
    a:20,
    x: function(){
        // enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y();
    }
}

obj2.x();
