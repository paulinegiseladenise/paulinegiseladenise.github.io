var myButton = document.getElementById("myBtn");
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;








    var Ja = jaSvar;
    var Nej = nejSvar;

    function jaSvar() {
        alert(Åh vad kul!);
        document.getElementById("Ja").innerHTML = 'Åh så roligt, då tycker vi likadant!';
    }

    function nejSvar() {
        alert(Åh vad trist!);
        document.getElementById("Nej").innerHTML = 'Nej vad trist. Vi kanske har annat gemensamt!';
    }


    jaSvar();
    nejSvar();




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
