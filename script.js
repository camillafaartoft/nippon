

/* -- knap for at vælge hvilken type måltidskasse -- */
/* -- den klassiske knap -- */
const klassiskKnap = document.getElementById("klassiskKnap")
const japanKnap = document.getElementById("japanKnap")
const budKasse = document.getElementById("budKasse")
const budTitel = document.getElementById("budTitel")
const budTitel2 = document.getElementById("budTitel2")
const personligBox = document.getElementById("personligBox")
const collection = document.getElementsByClassName("raekke")

klassiskKnap.onclick = maaltidsKasse1;
function maaltidsKasse1(){
        klassiskKnap.style.backgroundColor = "#ffff";
        klassiskKnap.style.border = "solid 2px #c41300";
        klassiskKnap.style.color = "black";
        japanKnap.style.backgroundColor = "#c41300";
        japanKnap.style.color = "white";
        budKasse.style.display = "none";
        budTitel.style.display = "none";
        budTitel2.style.display = "none";
        personligBox.style.display = "none"; 
        

        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = "none";
        }
}

japanKnap.addEventListener("mouseover", function() {
    japanKnap.style.backgroundColor = "#fff";
    japanKnap.style.color = "#000000";
    japanKnap.style.border = "solid 2px #c41300";
})

// Tilføj event listener for at nulstille stilen ved mouseout
japanKnap.addEventListener("mouseout", function() {
    japanKnap.style.backgroundColor = "#c41300";
    japanKnap.style.color = "#ffff";
    japanKnap.style.border = "solid 2px #c41300";
})


/* -- knap for at vælge måltidskasse -- */
const vaelgKasseKnap = document.getElementById("boerneknap")
const boksMaaltid = document.getElementById("boernekasse")
let groen = false;

vaelgKasseKnap.onclick = groenKasse;
function groenKasse(){
    if(groen == false){
        vaelgKasseKnap.style.backgroundColor = "#56641c";
        vaelgKasseKnap.style.border = "solid 2px #56641c";
        vaelgKasseKnap.style.color = "#ffff";
        vaelgKasseKnap.innerHTML = "Valgt kasse";
        boksMaaltid.style.border = "solid 2px #56641c";
        kasse3.style.border = "";
        groen = true;
    }
    else{
        vaelgKasseKnap.style.backgroundColor = ""; 
        vaelgKasseKnap.innerHTML = "Vælg kasse";
        vaelgKasseKnap.style.border = "";
        vaelgKasseKnap.style.color = "";
        boksMaaltid.style.border = ""; // Tilbage til standard border
        groen = false;
    }
}


/* -- vælg ret knap 1 -- */
const vaelgKnap1 = document.getElementById("vaelg1")
const kasse1 = document.getElementById("kasse1")
let erGroen1 = false;

vaelgKnap1.onclick = blivGroen1;
function blivGroen1(){
    if(!erGroen1){
        vaelgKnap1.style.backgroundColor = "#56641c";
        vaelgKnap1.innerHTML = "Valgt ret";
        kasse1.style.border = "solid 3px #56641c";
        erGroen1 = true;
    }
    else{
        vaelgKnap1.style.backgroundColor = ""; // Tilbage til standard farve
        vaelgKnap1.innerHTML = "Vælg ret";
        kasse1.style.border = ""; // Tilbage til standard border
        erGroen1 = false;
    }
}

/* -- vælg ret knap 2 -- */
const vaelgKnap2 = document.getElementById("vaelg2")
const kasse2 = document.getElementById("kasse2")
let erGroen2 = false;

vaelgKnap2.onclick = blivGroen2;
function blivGroen2(){
    if(!erGroen2){
        vaelgKnap2.style.backgroundColor = "#56641c";
        vaelgKnap2.innerHTML = "Valgt ret";
        kasse2.style.border = "solid 3px #56641c";
        erGroen2 = true;
    }
    else{
        vaelgKnap2.style.backgroundColor = ""; // Tilbage til standard farve
        vaelgKnap2.innerHTML = "Vælg ret";
        kasse2.style.border = ""; // Tilbage til standard border
        erGroen2 = false;
    }
}

/* -- vælg ret knap 2 -- */
const vaelgKnap3 = document.getElementById("vaelg3")
const kasse3 = document.getElementById("kasse3")
let erGroen3 = false;

vaelgKnap3.onclick = blivGroen3;
function blivGroen3(){
    if(!erGroen3){
        vaelgKnap3.style.backgroundColor = "#56641c";
        vaelgKnap3.innerHTML = "Valgt ret";
        kasse3.style.border = "solid 3px #56641c";
        erGroen3 = true;
    }
    else{
        vaelgKnap3.style.backgroundColor = ""; // Tilbage til standard farve
        vaelgKnap3.innerHTML = "Vælg ret";
        kasse3.style.border = ""; // Tilbage til standard border
        erGroen3 = false;
    }
}





