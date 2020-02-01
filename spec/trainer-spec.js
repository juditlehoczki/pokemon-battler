const { expect } = require("chai");
const Trainer = require("../trainer.js");
const {
  Pokemon,
  Bulbasaur,
  Charmander,
  Squirtle,
  Pidgey
} = require("../pokemon.js");

describe("Trainer", () => {
  describe("Trainer properties", () => {
    it("has a name when passed a newName argument", () => {
      const trainer = new Trainer("Steve");
      expect(trainer.name).to.equal("Steve");
    });

    it("has a bag array which defaults as empty array", () => {
      const trainer = new Trainer("Steve");
      expect(trainer.bag).to.eql([]);
    });
  });

  describe("Trainer methods", () => {
    it("it has a catch method which pushes a pokemon to trainer's bag array", () => {
      const pokemon = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const trainer = new Trainer("Steve");
      trainer.catch(pokemon);
      expect(trainer.bag[0].name).to.equal("Pikachu");
    });
  });
});
