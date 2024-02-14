// Exercice 9: Vérifier si tous les éléments d'un tableau passent un test
let numbers = [1, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) {
        result = false;
        break;
    }
}
console.log(result);