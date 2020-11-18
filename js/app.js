// var Age = 18
// var is_subscribed = confirm("Do you have a subscription")

// if (age <= 18 && opinion == true) {
//     console.log(Age + "is over 18");
// }

// // if (age < 18 && useris_subscribed == false) { console.log("are you over the age of 18") }

// else if ()

// else if ()

var age = 12;
var is_subscribed = false;

if (age >= 18 && is_subscribed) {
    console.log("User is 18 or older and subscribed!");
} else if (age < 18 && is_subscribed) {
    console.log("user is under 18 and is_subscribed");
} else if (age >= 18 && !is_subscribed) {
    console.log("User is 18 or older and is NOT_subscribed");
} else if (age < 18 && !is_subscribed) {
    console.log("user is under 18 and is NOT_subscribed");
} else {
    console.log ("Something Went Wrong!");
}


// week 9 b array assignment below------------------------------

var userAges = [18, 90, 15, 28, 25]
var subscriptionStatus = [true, false, false, true];




for (var index = 0; index < 5; index++) {
    var userAge = userAges[index];
    var is_subscribed = subscriptionStatus[index];


    if (userAge >= 18 && is_subscribed) {
        console.log("User is 18 or older and subscribed!");
    } else if (userAge < 18 && is_subscribed) {
        console.log("user is under 18 and is_subscribed");
    } else if (userAge >= 18 && !is_subscribed) {
        console.log("User is 18 or older and is NOT subscribed");
    } else if (userAge < 18 && !is_subscribed) {
        console.log("user is under 18 and is NOT subscribed");
    } else {
        console.log("Something Went Wrong!");
    }

}















for (var index = 0; index < userAges.length; index++) {
    var userAge = userAges[index];
    var is_subscribed = subscriptionStatus[index];


    if (userAge >= 18 && is_subscribed) {
        console.log("User is 18 or older and subscribed!");
    } else if (userAge < 18 && is_subscribed) {
        console.log("user is under 18 and is_subscribed");
    } else if (userAge >= 18 && !is_subscribed) {
        console.log("User is 18 or older and is NOT subscribed");
    } else if (userAge < 18 && !is_subscribed) {
        console.log("user is under 18 and is NOT subscribed");
    } else {
        console.log("Something Went Wrong!");
    }

}



var counter = 0;
while (counter < userAges.length) {
    var userAge = userAges[counter];
    var is_subscribed = subscriptionStatus[counter];


    if (userAge >= 18 && is_subscribed) {
        console.log("User is 18 or older and subscribed!");
    } else if (userAge < 18 && is_subscribed) {
        console.log("user is under 18 and is_subscribed");
    } else if (userAge >= 18 && !is_subscribed) {
        console.log("User is 18 or older and is NOT subscribed");
    } else if (userAge < 18 && !is_subscribed) {
        console.log("user is under 18 and is NOT subscribed");
    } else {
        console.log("Something Went Wrong!");
    }

    counter++;

}








