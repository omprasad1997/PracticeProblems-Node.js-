let givenNumber = 1225;
var primeFactors=[1];

for(let val = 2;val<=givenNumber;val++){
    if((givenNumber%val)==0)
        if(isPrime(val))
            primeFactors.push(val);
}

function isPrime(number){
    for(let val = 2;val<number;val++)
    {
        if(number%val==0)
            return false;
    }
    return true;
}

console.log(primeFactors);
