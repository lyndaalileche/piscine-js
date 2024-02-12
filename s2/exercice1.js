// Exercice 1: Somme des éléments d'un tableau
function sommeTableau(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
      somme += tableau[i];
  }
  return somme;
}

var monTableau = [1, 2, 3, 4, 5];
console.log(sommeTableau(monTableau));