const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Jurassic Park', function() {

let park;
let dinosaur;
let dinosaur1;
let dinosaur2;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur();
    dinosaur1 = new Dinosaur("Dromiceiomimus", 4);
    dinosaur2 = new Dinosaur("Concavenator", 1);
  })

  it('dino should have a type', function(){
    assert.strictEqual(dinosaur1.type, "Dromiceiomimus");
  })

  it('dino should have a number of offspring', function() {
    assert.strictEqual(dinosaur1.offspring, 4);
  })

  it('enclosure should start empty', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('can add dino to enclosure', function() {
    park.addDino(dinosaur1);
    assert.strictEqual(park.numDinos(), 1);
  })












})
