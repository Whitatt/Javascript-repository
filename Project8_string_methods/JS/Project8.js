function Concat() {
    var part_1 = "There is ";
    var part_2 = "a house ";
    var part_3 = "in New Orelans ";
    var part_4 = "they call the rising sun.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}//This example combines all the parts into a complete sentence//

function slice_Method() {
    var Sentence = "In space, no one can hear you scream.";
    var Section = Sentence.slice(12,20);//the 12th and 20th slice remove everything before the 12th letter and everything after the 20th letter//
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {
    var X =77;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}//the toString method returns the number 77//

function precision_Method() {
    var X = 27836.297385;
    document.getElementById("Precision").innerHTML = X.toPrecision(7);
}//The Precision method formats a number to a specified length//
