var pets = ['cat', 'dog', 'rat'];

//  var pluralized = pets.map(function(element) {
//   return element+'s';
// });

var pluralized = []
for (var i = 0; i < pets.length; i++) {
  pluralized[i] = pets[i] + 's'
}


console.log(pluralized);