const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(){
  var cat = "Ralph"
  kittens.push(cat);
  return kittens;
}
function destructivelyPrependKitten(){
  var cat = "Bob"
  kittens.unshift(cat);
  return kittens;
}
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
