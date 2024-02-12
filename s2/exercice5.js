// Exercice 5: Compter les occurrences d'une lettre dans une chaîne
var str = "A,B,C,D,E,A";
 
var count = (str.match(/\A/g) || []).length;
console.log(count);

