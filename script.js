// Variable declarations and conditionals example
let num = 5;

if (num >= 5) {
    console.log("Number is greater than or equal to 5");
}
else {
    console.log("Number is less than 5");
}

// Javascript Function example
function billionaire(name , netWorth) {
    console.log(name + " is a billionaire with a networth of " + netWorth);
}
billionaire("Kelvin", "$220 billion");

// Billionaire list
billionaire("Elon Musk", "$230 billion");
billionaire("Jeff Bezos", "$200 billion");
billionaire("Bernard Arnault", "$210 billion");

function countToFive() {
    let count = "";
    for (let i = 1; i <= 5; i++) {
        count += i + "<br>"
    }
}

// JS loops
//for loop
let a = 1;
for(let i = 1; i <= 5; i++)
    console.log(a++);
//while loop
let nm = 1;
 while (nm <= 10) {
     console.log(nm++);
 }


 // ...existing code...
document.getElementById("Btn").addEventListener("click", function() {
    document.getElementsByTagName("p")[0].textContent = "This marks the end of the assignment";
    document.body.style.backgroundColor = "lightblue";
    document.getElementsByClassName("intro")[0].textContent = "This is the updated introduction text.";
    document.getElementsByTagName("p")[0].style.fontSize = "20px";
    alert("Bravo Kelvin!")
})
// ...existing code...

