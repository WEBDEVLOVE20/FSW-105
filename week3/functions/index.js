function sum(nmbr1, nmbr2){
    return nmbr1 + nmbr2
}

var result = sum(25, 25)
console.log(result);



function highestNum(nmbr1, nmbr2, nmbr3){

}

console.log(Math.max(15, 90, 38));


function oneNum(nmbr1){

    if(nmbr1 % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    } 
}
oneNum(8);


function myFunction(strng1){
    if(strng1.length <= 20){
        console.log(strng1 + strng1);
    } else {
        console.log(strng1.slice(0, strng1.length / 2));
    }
}
myFunction("Quality is not an act, it is a habit.");