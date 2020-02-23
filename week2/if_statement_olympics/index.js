// Preliminaries
if (5 > 3) {
    console.log ("is greater than")
}

if ("cat".length === 3) {
    console.log ("is the length")
}

if ("cat" === "dog") {
    console.log ("is the same")
} else {
    console.log ("not the same")
}



// Bronze Medal
var person = {
    name: "Bobby",
    age : 12
} 
if (person.age >= 18) {
    console.log ("is allowed to go to the movie")
} else {
    console.log ("is not allowed to go to the movie")
}

if (person.name.startsWith("B")) {
    console.log ("is allowed to go to the movie")
} else {
    console.log ("is not allowed to go to the movie")
}

if (person.name.startsWith("B") && person.age >= 18) {
    console.log ("is allowed to go to the movie")
} else {
    console.log ("is not allowed to go to the movie")
}



// Silver Medal
if (1 === "1") {
    console.log ("strict")
} else if (1 == "1") {
    console.log ("abstract")
} else {
    console.log ("not equal at all")
}

if (1 <= 2 && 2 === 4) {
    console.log ("yes")
}



//Extra Credit Ternarys
(5 > 3) ? console.log("is greater than") : console.log("is less than");

("cat".length === 3) ? console.log("is the length") : console.log("is not the length");

("cat" === "dog") ? console.log("is the same") : console.log("not the same");

(person.age >= 18) ? console.log("is allowed to go to the movie") : console.log("is not allowed to go to the movie");

(person.name.startsWith("B")) ? console.log("is allowed to go to the movie") : console.log("is not allowed to go to the movie");

(person.name.startsWith("B") && person.age >= 18) ? console.log("is allowed to go to the movie") : console.log("is not allowed to go to the movie");

(1 === "1") ? console.log("strict") 
    : (1 == "1") ? console.log("abstract") 
    : console.log("not equal at all");

(1 <= 2 && 2 === 4) ? console.log("yes") : console.log("no");



//Extra Extra Credit Gold Medal
if (typeof "dog" === "string") {
    console.log ("is a string");
}
if (typeof true === "boolean") {
    console.log ("is a boolean");
}

var animal = "horse";
if (typeof animal === "undefined") {
    console.log("is undefinded")
} else {
    console.log("is defined");
}

if ("s" > 12) {
    console.log("is greater than");
}

if ("strawberry" > 12458) {
    console.log("is greater than");
}

var myNum = 10;
(myNum % 2 == 0) ? console.log("is even") : console.log("is odd");
