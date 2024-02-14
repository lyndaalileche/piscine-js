// Exercice 7: Implémenter une fonction de réduction personnalisée
var a = [10, 21, 13, 56];

function add(a, b) { return a + b }
function foo(a, b) { return a.concat(b) }

Array.prototype.reduce2 = function (f, result) {
  var i = 0;
  if (arguments.length < 2) {
    i = 1;
    result = this[0];
  }
  for(; i < this.length; i++) {
    result = f(result, this[i], i, this);
  }
  return result;
};
console.log(a.reduce(add), a.reduce2(add))        
console.log(a.reduce(add, 10), a.reduce2(add, 10)) 
// extra test with foo:
console.log(a.reduce(foo, 'X'), a.reduce2(foo, 'X')) 