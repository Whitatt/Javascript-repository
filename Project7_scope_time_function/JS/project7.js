function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Javascript is a challenging language!";
    }
}//note the time is less than 18:00, the greeting will display//

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}//The above example provides an if/else/if/else statement providing a time of day//

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//X is not defined in the console log when you inspect it//

var Y = 10;
function Add_numbers_3() {
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();
//The above exmaple is a global variable//

function Add_numbers_3() {
    var Z = 10;
    document.write(20 + Z + "<br>");
}
function Add_numbers_4() {
    document.write(Z + 100);
}
Add_numbers_3();
Add_numbers_4();
//The above is an example of a local variable//