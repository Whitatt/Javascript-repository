const cars = ["Volkswagen", "Toyota", "Porsche", "Subaru"];

let i = 0;
let text = "";
while (cars[i]) {
    text += cars[i] + "<br>";
    i++;
}
document.getElementById("vehicles").innerHTML = text;