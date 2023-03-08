const person = {
  name: 'john doe',
  age: 42,
  nationality: 'American',
};

const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj.hasOwnProperty(prop)) {
      throw new Error('not exist');
    }
    return obj[prop];
  },
  set: (obj, prop, value) => {
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('Invalid Type');
    }
    obj[prop] = value;
  },
});

console.log(personProxy.name);

personProxy.age = 24;
console.log(personProxy.age);

person.age = 'hello';
console.log(person.age);

/** Reflect라는 빌트인 객체를 사용하면 Proxy객체를 더 쉽게 조작할 수 있음.*/
const personProxyWithReflect = new Proxy(person, {
  get: (obj, prop) => {
    return Reflect.get(obj, prop) ?? 'Invalid value';
  },
  set: (obj, prop, value) => {
    return Reflect.set(obj, prop, value);
  },
});

console.log(personProxyWithReflect.name);
personProxyWithReflect.age = 50;
console.log(personProxyWithReflect.age);
