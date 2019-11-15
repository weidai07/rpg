import { Character, StrongCharacter, WeakCharacter } from './../src/scripts.js';

describe('Character', () => {

  test('should correctly create a new character object with a name and power level equal to 10', () => {
    var newCharacter = new Character("Mike");
    expect(newCharacter.name).toEqual("Mike");
    expect(newCharacter.powerLevel).toEqual(10);
  });
});

describe('StrongCharacter', () => {

  test('should correctly create a new StrongCharacter object that includes a name, weapon, powerLevel, and color', () => {
    var newStrongCharacter = new StrongCharacter("Jake", "sword", "green");
    expect(newStrongCharacter.name).toEqual("Jake");
    expect(newStrongCharacter.weapon).toEqual("sword");
    expect(newStrongCharacter.color).toEqual("green");
    expect(newStrongCharacter.powerLevel).toEqual(10);
  });

});

describe('WeakCharacter', () => {

  test('testing a new WeakCharacter object which includes a name and color', () => {
    var newWeakCharacter = new WeakCharacter("Bepop");
    expect(newWeakCharacter.name).toEqual("Bepop");
    expect(newWeakCharacter.powerLevel).toEqual(10);
  });
});
