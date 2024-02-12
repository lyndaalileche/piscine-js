// Exercice 7: Vérifier si un mot est un palindrome
function estPalindrome(mot) {
 
  mot = mot.toLowerCase();
  
  // Supprimer les espaces et la ponctuation
  mot = mot.replace(/[^a-zA-Z0-9]/g, "");

  // Inverser le mot
  var motInverse = mot.split('').reverse().join('');

  // Vérifier si le mot inversé est égal au mot d'origine
  return mot === motInverse;
}

// Exemples d'utilisation
console.log(estPalindrome("radar"));
console.log(estPalindrome("Ésope reste ici et se repose")); 
console.log(estPalindrome("Bonjour")); 
