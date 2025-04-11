/* This has a function keyword with a showMessage identifier and alerts*/
function showMessage() {
    alert("Hope");
    alert("You");
    alert("Enjoy the Visit!");
}

/* This changes color of the two hover buttons */
function changeColor() {
    document.getElementById("hoverButton1").style.background = "#1B625A";
    document.getElementById("hoverButton2").style.background = "#1B625A";
    document.getElementById("hoverButton1").style.color = "#ECD5B1";
    document.getElementById("hoverButton2").style.color = "#ECD5B1";
}

/*This reverts color of the two hover buttons */
function revertColor() {
    document.getElementById("hoverButton1").style.background = "#397296"
    document.getElementById("hoverButton2").style.background = "#397296"
    document.getElementById("hoverButton1").style.color = "#EFE8DC";
    document.getElementById("hoverButton2").style.color = "#EFE8DC";
}



/* This is a counter with an increment and 'if-else' statement*/
let count = 0;
function increment() 
{
    count = count + 1;
    document.getElementById("counter").innerHTML = "Luck Charges: " + count;

let x = count
let y = 2
let z = x % y

if (z == 0) {
    document.getElementById("counter").style.color = "green";
} 
else {
     document.getElementById("counter").style.color = "#9b5895"
}

}







let text = "";
for (let i = 0; i < 7; i = i++) 
{
    text += "I cannot say this enough, Good job Team " + i + ".";
}
document.getElementById("container").innerHTML = text;


