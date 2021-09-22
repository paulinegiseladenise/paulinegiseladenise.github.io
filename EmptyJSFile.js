var myButton = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;




function tryck() {
    var answer = document.getElementById("buttonYes").value;
    document.getElementById("buttonYes").innerHTML = test();
}


function test() {
    if (answer == "yes")
        alert ("Kul!");
}

else {
alert ("Tråkigt!");

}
