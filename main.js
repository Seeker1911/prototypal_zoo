//constructor functions. set Animal as prototype of genus.
function Animal() {
this.name = null
}

//genus
function Panthera() {
  this.genusName = 'Panthera'
}
Panthera.prototype = new Animal()

function Canis() {
  this.genusName = 'Canis'
}
Canis.prototype = new Animal()

//species
function Tigris() {
  this.speciesName = 'Tiger'
  console.log('I am a Tiger');
}
Tigris.prototype = new Panthera()

function Leo() {
  this.speciesName = 'Lion'
  console.log('I am a Lion');
}
Leo.prototype = new Panthera()

function Dirus() {
  this.speciesName = 'Wolf'
  console.log('I am a Dire Wolf');
}
Dirus.prototype = new Canis()

function Latrans() {
  this.speciesName = 'Coyote'
  console.log('I am a Coyote');
}
Latrans.prototype = new Canis()

var direwolf = new Dirus('ghost')
console.log('genus', direwolf.genusName);
console.log('species', direwolf.speciesName);
console.log('name:', direwolf.name);
