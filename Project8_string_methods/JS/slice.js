function slice_Method() {
    var Sentence = "In space, no one can hear you scream.";
    var Section = Sentence.slice(12,20);//the 12th and 20th slice remove everything before the 12th letter and everything after the 20th letter//
    document.getElementById("Slice").innerHTML = Section;
}
