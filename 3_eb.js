document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("Grandparent Clicked")
}, true)

document.querySelector("#parent")
.addEventListener('click' , ()=> {
    console.log("Parent Clicked!");
},true);

document.querySelector("child")
.addEventListener('click', ()=>{
    console.log("Child Clicked!")
}, true)