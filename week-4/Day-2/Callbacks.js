// function show(){
//     console.log("Hello World");
// }
// function display(show){
//     console.log("display function");
//     show();
// }
// display(show);

addition(8,function(addres){
    subtraction(addres,function(subres){
        multiplication(subres,function(mulres){
            division(mulres,function(divres){
                console.log(divres);
            })
        })
    })
})
function addition(val,callback){
    return callback(val+8)
}

function subtraction(val,callback){
    return callback(val-6)
}

function multiplication(val,callback){
    return callback(val*4)
}

function division(val,callback){
    return callback(val/4)
}