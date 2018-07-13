var input = "amit,50,jace,70,rajesh,80,amit,40";
var arr= input.split(",");
var res= [];
var res1= [];
var res3=[];

for (i=0;i<arr.length;i++){
    res.push(arr[i]);
    res1.push(arr[i+1])
    console.log(arr[i] + ":" + arr[i+1]);
    i++
}

res
res1



