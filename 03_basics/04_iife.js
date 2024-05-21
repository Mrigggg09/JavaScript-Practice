// Immediately Invoked Function Expressions (IIFE)

//IIFE avoids global scope pollution(for var data)
//IIFE are function which get executed immediately
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')