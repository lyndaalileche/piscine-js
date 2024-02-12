// Exercice 8: Recherche dans un tableau
var tableau = [1, 2, 3, 4, 5];
var recherche = 1;
var trouvé = false;

tableau.forEach(function(element, index) {
    if (element === recherche) {
        console.log("L'élément " + recherche + " a été trouvé à l'index " + index + " dans le tableau.");
        trouvé = true;
    }
});

if (!trouvé) {
    console.log("L'élément " + recherche + " n'a pas été trouvé dans le tableau.");
}