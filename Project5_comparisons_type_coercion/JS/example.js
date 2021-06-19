function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_1Function() {
    document.getElementById("Test").innerHTML = isNan('This is a string');
}

function my_2Function() {
    document.getElementById("Test").innerHTML = isNan('007');
}
