    var Ja = true;
    var Nej = false;


        function test()
        {
            if (Ja = false) {
        alert("Åh vad kul!");
        document.getElementById("Ja").innerHTML = 'Åh så roligt, då tycker vi likadant!';
    }

    else {
        alert("Åh vad trist!");
        document.getElementById("Nej").innerHTML = 'Vi kanske har annat gemensamt!';
    }
        }

var theButton = document.getElementById("Ja");
var theButton = document.getElementById("Nej");

theButton.addEventListener("click", function () {
    test();


});





var mittNummer = 5;

function numret() {
    for (var mittNummer = 0; mittNummer < 5; mittNummer++) {
        
        alert("Min forloop som utför något 5 gånger");
    }
}

    var theNumber = document.getElementById("Min forloop");

    theNumber.addEventListener("click", function () {
    
numret();

});






try {
    nonExistentFunction();

} catch (error) {
    console.error(error);
}