function count_Function() {
    document.getElementById("Counting").innerHTML = Count();//counting element displays variable,function and return//
    function Count() {
        var Starting_point = 12;
        function Plus_one() {Starting_point += 8;}
        Plus_one();
        return Starting_point;
    }
}

function Vehicle(Make, Model, Year, Color) {//function explains made, model, year and color//
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model +
    " manufactured in " + Erick.Vehicle_Year;//my function provides specifics on what name, color, make and year chosen//
}