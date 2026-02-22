// Immediately Invoked Function Expression (IIFE)

(function DBconnection() {
    console.log(`Database connected`);
})();
// semicolon(;) is necessary
(() =>{
    console.log(`Database connected two`);
})();

((num) =>{
    console.log(`Database connected ${num}`);
})('three');






