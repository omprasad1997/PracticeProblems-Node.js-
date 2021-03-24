var storeNumbers = [];
let min = 100;
let max = 999;
for(let i = 1;i<=10;i++){
    let value = Math.floor(Math.random()*(max-min+1)+min);
    storeNumbers.push(value);
}
console.log(storeNumbers.sort());
console.log("First Max: "  + storeNumbers[storeNumbers.length-1]+"\n"+
            "Second Max : "+ storeNumbers[storeNumbers.length-2]);
            
console.log("First Min: "+ storeNumbers[0]+"\n"+
            "Second Min : "+storeNumbers[1]);
