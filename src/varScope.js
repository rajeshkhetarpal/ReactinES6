//var declarations are NOT block-scoped
//var declarations are scoped to the beginning of the nearest enclosing function, script or module, which can cause unexpected behavior, 
//especially with function closures that reference var declarations inside of loops. 

for (var i = 0; i <3; ++i) {
    var iteration = i;
    setTimeout(function() { console.log(iteration); }, i*1000);
}

// output 2,2,2 



// for (var i = 0; i < 3; ++i) {
//     let iteration = i;
//     setTimeout(function() { console.log(iteration); }, i*1000);
// }

// output 0,1 ,2
