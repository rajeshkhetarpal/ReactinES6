//reverse(500) = 5
//reverse(-51) = -15


const reverseInt=(num)=>{
    
    const newNumber  =  num.toString().split('').reverse().map(x=>Math.sign(x)===1?x:'').join('')
    //return Math.sign(num) === 1 ? newNumber : '-' + newNumber
    return newNumber * Math.sign(num)
    
}

let res = reverseInt(50)
res

res = reverseInt(-15)
res


var x = parseInt("-005")
x

x = parseInt("5-")
x

var y = 5 * -1
y




