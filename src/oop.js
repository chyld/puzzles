function Organism(genus){
  this.genus = genus;
}

Organism.prototype.eat = function(){
  console.log('organism:eating');
};

Organism.prototype.sleep = function(){
  console.log('organism:sleeping');
};

function Dog(name, gender){
  Organism.call(this, 'Canis');

  this.name = name;
  this.gender = gender;
}

Dog.prototype = Object.create(Organism.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.fetch = function(){
  console.log('dog:fetching');
};

// ****************************************** //

var d = new Dog('rex', 'male');
d.eat();
d.sleep();
d.fetch();

console.log(d instanceof Dog);
console.log(d instanceof Organism);
console.log(d instanceof Object);
