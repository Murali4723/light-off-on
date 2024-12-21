function switchOn() {
    document.getElementById("img-light").src = "light-on.jpg"; 
    document.getElementById("body").style.backgroundColor = "white";
}

function switchOff() {
    document.getElementById("img-light").src = "light-off.jpg"; 
    document.getElementById("body").style.backgroundColor = "grey";
    document.getElementById("switchStatus").textContent = "get out from dreams";
}

