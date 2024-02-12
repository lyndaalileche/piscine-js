// Exercice 3: Filtrer les nombres pairs d'un tableau
function filtrerNombresPairs(tableau) {
  return tableau.filter(function(nombre) {
      return nombre % 2 === 0;
  });
}


var monTableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var nombresPairs = filtrerNombresPairs(monTableau);
console.log(nombresPairs); 