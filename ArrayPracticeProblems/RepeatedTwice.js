let repeatedNumbers = [];
let start = 1;
let end   = 100;

for(let val = 1;val<=end;val++){
    if(val%11==0)
        repeatedNumbers.push(val);
}

console.log(repeatedNumbers);