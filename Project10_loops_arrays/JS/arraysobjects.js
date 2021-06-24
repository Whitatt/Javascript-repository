function dog_pics() {
    var Dog_Picture = [];
    Dog_Picture[0] = "sleeping";
    Dog_Picture[1] = "playing";
    Dog_Picture[2] = "eating";
    Dog_Picture[3] = "barking";
    document.getElementById("Dog").innerHTML = "In this picture, the dog is " +
        Dog_Picture[0] + ".";
}