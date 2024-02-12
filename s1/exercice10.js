// Exercice 10: Calculer la factorielle d'un nombre
function factorielle(n) {
  if (n === 0 || n === 1) {
      return 1;
  } else {
      var resultat = 1;
      for (var i = 2; i <= n; i++) {
          resultat *= i;
      }
      return resultat;
  }
}

console.log(factorielle(3)); 


