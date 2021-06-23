function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if(seconds == -1) {
        alert("Time's up!");
    }
        }
    tick();
}//the statement "setTimeout)tick, 1000);" means that the program is pausing for 1,000 milliseconds//