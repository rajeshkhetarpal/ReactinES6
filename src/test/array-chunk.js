let arr  = [1,2,3,4,5,6,7]
let len = 2;
let newA =[];

x = newA[newA.length] 
x


for (let element of arr ){

    let last = newA[newA.length -1];
    if( !last ||  last.length == len ){
        newA.push([element]);
    }else {
        last.push(element);
    }
}

newA



let newArr = arr.reduce((p,c,i)=>{
    if(i < len -1 ){
        p = p && p.toString() + "," +  c.toString()
    }
    return p
},'')

newArr


function createArray (...arg){
    return new Array(...arg);    
}

k = createArray(1,2)
k


