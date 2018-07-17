/// maximum number of occureance of same character in string 
/// "aacacdcsjksc" answer is C

let str ="aacacdcsjkscv";

let charMap = {};

for (let char of str){
    charMap[char] = charMap[char] + 1 || 1
}
charMap

var res = Object.keys(charMap).reduce((p,c)=>{
    return charMap[c] > p.max ? {maxChar:c, max:charMap[c]} : p
},{maxChar:'',max:0})

res

let max = 0 
let maxChar = ''

for (let [k,v] of Object.keys(charMap)){
    maxChar = charMap[k] > max ? k: maxChar;
    max = charMap[k] > max ?  charMap[k] : max
}

for (let char in charMap){
    if(charMap[char]>max){
        max = charMap[char];
        maxChar = char;
    }
}
maxChar
max



charMap


let arr = str.split('')
arr
arr = arr.sort()

arr

let counter= 0 
let newCounter = 0 
let counterChar = '';

let arr2 = []


for (let x of arr){

    if(arr2.slice(-1)[0] &&  x==arr2.slice(-1)[0].value){
        counter++ ; 
        arr2[arr2.length-1] = {'value':x, 'count': counter++}
    }
    else{
        counter = 0 ;
        arr2.push( {'value':x, 'count': counter++});
    }
}

arr2

arr2.sort((a,b)=>{return a.count < b.count})

arr2








