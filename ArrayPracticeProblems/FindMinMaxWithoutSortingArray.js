var storeNumbers = [];
let maxValue = -Infinity;
let minValue = Infinity;
let min = 100;
let max = 999;
for(let i = 1;i<=10;i++){
    let value = Math.floor(Math.random()*(max-min+1)+min);
    storeNumbers.push(value);
    maxValue = Math.max(maxValue,value);
    minValue = Math.min(minValue,value);

}
console.log(storeNumbers);
console.log("First Max:" + maxValue);
let maxIndex = storeNumbers.indexOf(maxValue);
storeNumbers.splice(maxIndex,1);
console.log("Second Max:" + Math.max.apply(null,storeNumbers));

console.log("First Min:" + minValue);
let minIndex = storeNumbers.indexOf(minValue);
storeNumbers.splice(minIndex,1);
console.log("Second Min:" + Math.min.apply(null,storeNumbers));


