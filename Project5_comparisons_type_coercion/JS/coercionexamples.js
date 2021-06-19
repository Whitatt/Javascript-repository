function my_Function3() {
    document.write(5 > 2 && 10 > 4);//code returns "true" because 5 is greater than 2 and 10 is greater than 4//
}

function my_Function4() {
    document.write(5 > 10 || 3 > 4);// false because 5 is not greater than 10 and 3 is not greater than 4//
}

function not_Function2(){
    document.getElementById("Not").innerHTML = ! (20 > 5);//The ! (not) checks whether or not something is true//
}

function my_Function5() {
    document.write(40 == 40);//The numbers on the left are the same as the numbers on the right//
}

function my_Function7() {//triple equal sign to check whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right//
    X = 15;
    Y = 15;
    document.write(X === Y);
}