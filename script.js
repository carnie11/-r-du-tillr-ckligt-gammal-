console.log("running");
let inputText = document.getElementById("inputText");

let btn = document.getElementById("btn");

let age = inputText;


btn.addEventListener("click", function() {
    console.log("den här åldern skrevs in: " + age.value);
    if (age.value < 10) {
        alert("Du är för liten!")} else if
            (age.value == 12) {
            alert("Du är 12!")} else {
                alert("Du är för gammal")}
            }
            
        
        );

