// let name = {
//     firstname: "Akshay",
//     lastname: "Saini",
//     printFullName: function(){
//         console.log(this.firstname + " " + this.lastname);
//     }
// }

//good practice
let name = {
    firstname: "Akshay",
    lastname: "Saini",
    
}

let printFullName = function(hometown,state){
    console.log(this.firstname + " " + this.lastname + " from "+ hometown + "," + state);
}

printFullName.call(name, "Kolkata", "West Bengal");

let name2 = {
    firstname: "Tushar",
    lastname: "Seth",

    //! Not a good Practice to create name method in another object again
    // printFullName: function(){
    //     console.log(name.firstname + " " + this.lastname);
    // }
}

//? function borrowing
//call method
// It can be used to invoke (call) a method with an owner object as an argument (parameter).
// name.printFullName.call(name2);
printFullName.call(name2, "Mumbai" ,"Maharastra");


// apply method
// difference between call and apply is just the way we try to call methods
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
printFullName.apply(name2, ["Mumbai" ,"Maharastra"])


//bind method
//difference  between call and apply is just that bind method
//creates a copy of method which can be invoked later like normal functioms
// With the bind() method, an object can borrow a method from another object.
let printMyName = printFullName.bind(name2,"Mumbai","Maharastra");
console.log(printMyName);
printMyName();
