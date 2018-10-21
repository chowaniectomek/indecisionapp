class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showGreeting() {
    return `Hi I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

class Killer extends Person {
  constructor(name, age, killCount = 0) {
    super(name, age);
    this.killCount = killCount;
  }

  showGreeting() {
    let greeting = super.showGreeting();
    if (this.killCount > 0) {
      greeting += ` I've killed ${this.killCount} people.`;
    }
    return greeting;
  }
}

const me = new Person('Tomek', 33);
console.log(me.showGreeting());

const zsasz = new Killer('Victor Zsasz', 40, 156);
console.log(zsasz.showGreeting());
