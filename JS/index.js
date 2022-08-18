const myGallery = document.getElementById("app");
const mySelect = document.getElementById("select");

mySelect.addEventListener("change", animalSelected)



function animalSelected() {

    switch(mySelect.value) {
    case "hund":
    buildAnimalCard("hund");
    break;

    case "kat":
    buildAnimalCard("kat");
    break;

    case "delfin":
    buildAnimalCard("delfin");
    break;
    
    case "lion":
    buildAnimalCard("lion");
    break;

    default:
        alert("no animal like that");
}
}
function buildAnimalCard(testvalue){
    console.log("her er jeg");
    console.log(testvalue);
}