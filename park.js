const Park = function() {
  this. enclosure =[];
}

Park.prototype.addDino = function(dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.numDinos = function() {
  return this.enclosure.length;
}

Park.prototype.removeDinoByType = function(type) {
  for (let dinosaur of this.enclosure) {
    if (type === dinosaur.type) {
      let index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index, 1);
    }
  }
  return this.enclosure.length;
}

module.exports = Park;
