function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Altere apenas o código abaixo desta linha
let duck = new Bird();
Bird.prototype = Bird;
console.log(Bird.prototype)

let beagle = new Dog();
console.log(Dog.prototype.constuctor = Dog);
beagle.constructor