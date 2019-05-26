let num2 = readline();
let arr = readline().split(' ');

for(let i = 0; i < arr.length; i++){
    while(arr[i]%2===0){
        arr[i] = arr[i] / 2;
    }
}
let result = "YES";
for(let j = 1; j < arr.length; j++){
    if(Number(arr[0]) !== Number(arr[j])){
        result = "NO";
    }
}
console.info(result);