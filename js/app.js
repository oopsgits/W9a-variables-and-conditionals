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





/* CSV */
99d5c9,e4c1f9,4e4c67,afd0bf,cf9c77,054a29

/* Array */
["99d5c9","e4c1f9","4e4c67","afd0bf","cf9c77","054a29"]

/* Object */
{"Middle Blue Green":"99d5c9","Mauve":"e4c1f9","Independence":"4e4c67","Cambridge Blue":"afd0bf","Tan Crayola":"cf9c77","Forest Green Traditional":"054a29"}

/* Extended Array */
[{"name":"Middle Blue Green","hex":"99d5c9","rgb":[153,213,201],"cmyk":[28,0,6,16],"hsb":[168,28,84],"hsl":[168,42,72],"lab":[81,-22,0]},{"name":"Mauve","hex":"e4c1f9","rgb":[228,193,249],"cmyk":[8,22,0,2],"hsb":[278,22,98],"hsl":[278,82,87],"lab":[83,22,-23]},{"name":"Independence","hex":"4e4c67","rgb":[78,76,103],"cmyk":[24,26,0,60],"hsb":[244,26,40],"hsl":[244,15,35],"lab":[33,7,-15]},{"name":"Cambridge Blue","hex":"afd0bf","rgb":[175,208,191],"cmyk":[16,0,8,18],"hsb":[149,16,82],"hsl":[149,26,75],"lab":[81,-14,5]},{"name":"Tan Crayola","hex":"cf9c77","rgb":[207,156,119],"cmyk":[0,25,43,19],"hsb":[25,43,81],"hsl":[25,48,64],"lab":[68,14,27]},{"name":"Forest Green Traditional","hex":"054a29","rgb":[5,74,41],"cmyk":[93,0,45,71],"hsb":[151,93,29],"hsl":[151,87,15],"lab":[27,-29,14]}]
Download
Copy





