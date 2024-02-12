// Exercice 8: Fusionner deux tableaux et supprimer les doublons
function fusionnerSansDoublons(tableau1, tableau2) {
  // Fusionner les deux tableaux en un seul
  var fusion = [...tableau1, ...tableau2];
  
  // Créer un ensemble à partir du tableau fusionné pour éliminer les doublons
  var ensembleSansDoublons = new Set(fusion);
  
  // Convertir l'ensemble en tableau
  var tableauSansDoublons = Array.from(ensembleSansDoublons);
  
  return tableauSansDoublons;
}

var tableau1 = [1, 2, 3, 4];
var tableau2 = [3, 4, 5, 6];
var resultat = fusionnerSansDoublons(tableau1, tableau2);
console.log(resultat); 
