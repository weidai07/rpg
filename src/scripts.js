//import $ from 'jquery';

// Business Logic


export class Character {
  constructor(name){
    this.name = name;
    this.powerLevel = 10;
  }
  takePower() {
    this.powerLevel -= 2;
  }
}

export class StrongCharacter extends Character {
  constructor(name, weapon, color) {
    super(name);
    this.weapon = weapon;
    this.color = color;
  }
}

export class WeakCharacter extends Character {
  constructor(name) {
    super(name);
  }
}
