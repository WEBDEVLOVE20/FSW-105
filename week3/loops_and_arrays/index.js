var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];

var numOfComputer = 0;

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer") {
        numOfComputer++;
    }
}
    console.log(numOfComputer);



var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
];

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough");
     } else {
         console.log("not old enough");
        }
}


for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.");
    } else {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max.");
        }
}


for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
var genderReview = (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") ? "HER" : "HIM";
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road let " + genderReview + " in.");
        } else {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let " + genderReview + " in.");
       }  
     }



for(var i = 0; i < 101; i++) {
    if([i] % 2 === 0){
        console.log([i] + " Even"); //I can remove [i] from console.log to remove number and leave only string, figured it was easier to read this way though.
    } else {
        console.log([i] + " Odd");
    }
}
