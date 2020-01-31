const {
  expect
} = require("chai");
const {
  spy
} = require("sinon");
const Trainer = require("../trainer.js");
const Pokemon = require("../pokemon.js");

describe("Trainer", () => {
  describe("Trainer properties", () => {
    it("has a name when passed a newName argument", () => {
      const trainer = new Trainer("Steve");
      expect(trainer.name).to.equal("Steve");
    });

    it("has a storage array", () => {
      const trainer = new Trainer("Steve");
      expect(trainer.storage).to.eql([]);
    });
  });

  describe("Trainer methods", () => {
    it("has a catch method", () => {
      const trainer = new Trainer("Steve");
      expect(trainer.name).to.equal("Steve");
    });
    it("it has a catch method which pushes pokemon to trainers storage array", () => {
      // ArrangeActAssert
      const pokemon = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const trainer = new Trainer("Steve");
      const trainer2 = new Trainer("Steve");

      trainer.catch(pokemon);
      // trainer2.catch(pokemon);

      expect(trainer.storage[0].name).to.equal("Pikachu");
    });
    it("it has a catch method that returns the pokemon sound  ", () => {
      // ArrangeActAssert
      const pokemon = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const trainer = new Trainer("Steve");
      const catchPoke = trainer.catch(pokemon);
      expect(catchPoke).to.equal("Pika pika!");
    });

    it("it has a catch method that returns the pokemon sound  ", () => {
      // ArrangeActAssert
      const pokemon = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const pokemon2 = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      const trainer = new Trainer("Steve");
      trainer.catch(pokemon);
      trainer.catch(pokemon2);
      expect(trainer.storage.length).to.equal(2);
    });

    it("it has a catch method that returns the pokemon sound  ", () => {
      // ArrangeActAssert
      const pokemon = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const pokemon2 = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      const pokemon3 = new Pokemon(
        "Charmander",
        95,
        7,
        "Char char!",
        "Jump",
        "fire"
      );
      const pokemon4 = new Pokemon(
        "Pikachu2",
        100,
        10,
        "Pika pika2!",
        "Mega Punch",
        "grass"
      );
      const pokemon5 = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      const pokemon6 = new Pokemon(
        "Charmander",
        95,
        7,
        "Char char!",
        "Jump",
        "fire"
      );
      const pokemon7 = new Pokemon(
        "Charmander",
        95,
        7,
        "Char char!",
        "Jump",
        "fire"
      );
      const trainer = new Trainer("Steve");
      trainer.catch(pokemon);
      trainer.catch(pokemon2);
      trainer.catch(pokemon3);
      trainer.catch(pokemon4);
      trainer.catch(pokemon5);
      trainer.catch(pokemon6);
      trainer.catch(pokemon7);
      expect(trainer.storage.length).to.equal(6);
    });
  });
});