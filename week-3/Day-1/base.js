(function name(){
    console.log("Hello world");
})();

const myFunction = function(a,b){
    return a*b
}
console.log(myFunction(23,56));

const func = new Function("a","b","return a*b")
console.log(func(23,3));