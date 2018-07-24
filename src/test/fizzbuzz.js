// print fizz if number is multple of 3 
// print buzz if number is multiple of 5
/// prinmt fizzbuzz if number is multiple of 3 and 5 both 

for(let i=1;i<=30;i++){
    
    if(i % 3 ===0  && i % 5 ===0 ){
        console.log("fizzbuz")
    } else if (i % 5 ===0){
        console.log("buzz")
    } else if (i % 3 ===0){
        console.log("fizz")
    }
    else {console.log(i)}
}

var x = 3 % 3 ===0
x
