const age = 18;
const isFemale = true;
const diverStatus = "bob";
const name = "Sarah";
const totalAmount = 25;

if (age > 18) {
    console.log ("je bent ouder dan 18 en mag binnenkomen!");
} else if (age == 18) {
    console.log ("je bent 18 en je mag binnenkomen!");
} else {
    console.log ("je bent jonger dan 18 en mag helaas NIET binnenkomen!");
}

if (age>= 18 && age > 25) {
    console.log ("je krijgt 50% korting!")
} else {
    console.log ( "helaas geen korting voor jou :(")
}

if (isFemale) {
    console.log ("je bent een vrouw!");
} else {
    console.log ("je bent een man!");
}

if (diverStatus=== "bob") {
    console.log ("jij bent bob en mag WEL rijden!")
} else {
    console.log ("jij bent GEEN bob en mag dus NIET rijden!");
}

if (name === "Sarah" || name === "Bram") {
    console.log ("Gratis bieieieieier!!")
} else {
    console.log ( "Glas kraanwater voor jou!")
}

if (totalAmount >= 100) {
    console.log ("Gratis fles Ruinart Blanc de Blancs!");
} else if (totalAmount > 50) {
    console.log ("Gratis portie muchos nachos!");
} else if (totalAmount > 25) {
    console.log ("Gratis bitterballen!");
} else {
    console.log ( "Niks gratis, toch bedankt voor je bestelling!")
}