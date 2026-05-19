//IIFE: Immediately Invoked Function Expression
//It is used to create a separate scope for the variables and functions
//It is also used to avoid the pollution of global variables

//()() 
//First: defining the function
//Second: invoking the function

(function chai() {
    console.log(`10. chai bngyi!`)
})();   //here we have to put a semicolon to stop the function

(() => {
    console.log(`14. chai firse bngyi!`);
})();

//with parameters
((name) => {
    console.log(`19. ${name} ne chai banayi`);
})("harshita")