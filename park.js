const Park = function() {
  this. enclosure =[];
}

Park.prototype.addDino = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.numDinos = function() {
  return this.enclosure.length;
}

module.exports = Park;
