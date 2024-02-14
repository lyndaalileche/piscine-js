// Exercice 3: Créer une fonction de débogage
function debug(message, ...args) {
   // Affiche le message de débogage
  console.log(`[DEBUG] ${message}`, ...args);
}

// Exemple d'utilisation
const variable1 = "Valeur 1";
const variable2 = 42;

debug("La variable 1 contient :", variable1);
debug("La variable 2 contient :", variable2);

// Imaginez que vous ayez un bug dans votre code...
// Vous pouvez ajouter des appels à la fonction debug pour afficher des informations supplémentaires.

// Exemple de débogage d'une boucle
for (let i = 0; i < 5; i++) {
  debug("Itération :", i);
  // Votre code ici...
}
