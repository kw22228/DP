class Dog {
  constructor(name) {
    this.name = name;
  }

  //prototype 추가
  bark() {
    return 'bark!';
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return 'flying';
  }
}

const dog1 = new Dog('Daisy');
const dog2 = new Dog('Max');
const dog3 = new Dog('Spot');

console.log(Dog.prototype);
console.log(dog1.__proto__);

Dog.prototype.play = () => console.log('Playing');
dog1.play();

const superDog1 = new SuperDog('JW');
console.log(superDog1.bark());
console.log(superDog1.fly());

/** Object.create */
const dog = {
  bark() {
    return 'bark!!';
  },
};

const pet1 = Object.create(dog); // dog객체를 prototype으로 사용

console.log(pet1.bark());
