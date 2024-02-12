// Exercice 4: Trouver un élément dans un tableau d'objets
var personnes = [
  { id: 1, nom: 'lynda' },
  { id: 2, nom: 'ilyan' },
  { id: 3, nom: 'farid' }
];

var idRecherche = 2;
var personneTrouvee = personnes.find(function(personne) {
    return personne.id === idRecherche;
});

console.log(personneTrouvee); 