// Exercice 1: Trouver le plus grand nombre dans un tableau
function trouverPlusGrand(tableau) {
  if (tableau.length === 0) {
      return "Le tableau est vide";
  }

  var plusGrand = tableau[0];
  for (var i = 1; i < tableau.length; i++) {
      if (tableau[i] > plusGrand) {
          plusGrand = tableau[i];
      }
  }
  return plusGrand;
}

var monTableau = [122, 1, 8, 80, 3];
console.log(trouverPlusGrand(monTableau)); 
