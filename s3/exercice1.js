// Exercice 1: Supprimer les éléments falsy d'un tableau
var tableau = [1, undefined, 3, false, NaN, 0, , , ,];
var filtered = tableau.filter(Boolean)
console.log(filtered);