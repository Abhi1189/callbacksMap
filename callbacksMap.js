var words = ["ground", "control", "to", "major", "tom"];

function map(array, cb){
    var newArray = [];
    for(var i = 0; i < array.length; i++){
        newArray.push(cb(array[i]));
    }
console.log(newArray);
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});