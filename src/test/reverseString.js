var str = "apple";
var arr = str.split('');
//arr.reverse();
// arr.split('').reverse().join('')
//newString = arr.join('')

var x = str.split('').reduce((reversed,chr)=>{return chr + reversed},'') 
x

var newStr = "";
arr.length

for (var i=arr.length; i >0;  i--) 
{
    newStr= arr[i-1] + newStr;
}

newStr

var newStr1 = "";

for (let chr of  str){
    newStr1 = chr + newStr1
}
newStr1