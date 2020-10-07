var signeU = "";
var signeO = "";
var nombre = 0;
var gommetteU = "";
var gommetteO = "";
var score_joueur ="0";
var score_ordinateur="0";

function changement_de_texte() {
    document.getElementById("texte").innerText = "nom du joueur 1";

}
function changement_de_jeux1(signe) {
    if (signe == "ciseaux") {
        document.getElementById("mdimg").src = "images/shifumi_ciseaux.png"
        signeU = "ciseaux"
    }

    else if (signe == "pierre") {

        document.getElementById("mdimg").src = "images/shifumi_pierre.png"
        signeU = "pierre"
    }
    else if (signe == "feuille") {

        document.getElementById("mdimg").src = "images/shifumi_feuille.png"
        signeU = "feuille"

    }
    changement_de_jeux2();
    nombre++;
    console.log("nombre: " + nombre);
    document.getElementById("nombre").innerText = nombre;
}
function changement_de_jeux2() {
    var random = Math.round(Math.random() * 3)
    if (random == 1) {
        document.getElementById("mdimg2").src = "images/shifumi_ciseaux.png"
        signeO = "ciseaux"
    }
    else if (random == 2) {
        document.getElementById("mdimg2").src = "images/shifumi_pierre.png"
        signeO = "pierre"

    }
    else if (random == 3) {
        document.getElementById("mdimg2").src = "images/shifumi_feuille.png"
        signeO = "feuille"


    }
    utilisateur_win();
}
function change() {
    var person = prompt("Please enter your name",);

    if (person != null) {
        document.getElementById("demo").innerHTML = person;
    }
}
function utilisateur_win() {
    if (signeU == signeO) {
        console.log("egality" + " " + signeU + " " + signeO);
        if (nombre == 1) {
            console.log("egality");
            document.getElementById("ledo1").style.background = 'blue';
            document.getElementById("led1").style.background = 'blue';
        }
        else if (nombre == 2) {
            console.log("egality");
            document.getElementById("ledo2").style.background = 'blue';
            document.getElementById("led2").style.background = 'blue';
        }
        else {
            console.log("egality");
            document.getElementById("ledo3").style.background = 'blue';
            document.getElementById("led3").style.background = 'blue';
        }
    }
    else if (signeU == "ciseaux" && signeO == "feuille" || signeU == "pierre" && signeO == "ciseaux" || signeU == "feuille" && signeO == "pierre") {
        console.log("win" + " " + signeU + " " + signeO);
        if (nombre == 1) {
            console.log("win");
            document.getElementById("ledo1").style.background = 'red';
            document.getElementById("led1").style.background = 'green';
            document.getElementById("score").innerHTML= score_joueur + "-" +score_ordinateur
            score_joueur++;
        }

        else if (nombre == 2) {
            console.log("win");
            document.getElementById("ledo2").style.background = 'red';
            document.getElementById("led2").style.background = 'green';
            document.getElementById("score").innerHTML= score_joueur + "-" +score_ordinateur
            score_joueur++;
        }
    else  {
            console.log("win");
            document.getElementById("ledo3").style.background = 'red';
            document.getElementById("led3").style.background = 'green';
            document.getElementById("score").innerHTML= score_joueur + "-" +score_ordinateur
            score_joueur++;
        }
    }
 else {
    console.log("lose" + " " + signeU + " " + signeO);
    if (nombre == 1) {
        console.log("lose");
        document.getElementById("ledo1").style.background = 'green';
        document.getElementById("led1").style.background = 'red';
         document.getElementById("score").innerHTML= score_joueur + "-" +score_ordinateur
        score_ordinateur++;
    }

    else if (nombre == 2) {
        console.log("lose");
        document.getElementById("ledo2").style.background = 'green';
        document.getElementById("led2").style.background = 'red';
        document.getElementById("score").innerHTML= score_joueur + "-" +score_ordinateur
        score_ordinateur++;
    }
else  {
        console.log("lose");
       document.getElementById("ledo3").style.background = 'green';
        document.getElementById("led3").style.background = 'red';
        document.getElementById("score").innerHTML= score_joueur + "-" +score_ordinateur
        score_ordinateur++;
    }


}
}



   
    


