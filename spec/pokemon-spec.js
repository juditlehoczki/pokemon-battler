const { expect } = require("chai");
const {
  Pokemon,
  Bulbasaur,
  Charmander,
  Squirtle,
  Pidgey
} = require("../pokemon.js");

describe("Pokemon", () => {
  describe("Pokemon Properties", () => {
    it("has a name property when newName argument passed", () => {
      const poke = new Pokemon("Pikachu");
      expect(poke.name).to.equal("Pikachu");
    });

    it("has a health property when newHealth argument passed", () => {
      const poke = new Pokemon("Pikachu", 100);
      expect(poke.health).to.equal(100);
    });

    it("has a damage property when newDamage argument passed", () => {
      const poke = new Pokemon("Pikachu", 100, 10);
      expect(poke.damage).to.equal(10);
    });

    it("has a sound property when newSound argument passed", () => {
      const poke = new Pokemon("Pikachu", 100, 10, "Pika pika!");
      expect(poke.sound).to.equal("Pika pika!");
    });

    it("has a move property when newMove argument passed", () => {
      const poke = new Pokemon("Pikachu", 100, 10, "Pika pika!", "Mega Punch");
      expect(poke.move).to.equal("Mega Punch");
    });

    it("has a type property which defaults to normal when no argument passed ", () => {
      const poke = new Pokemon("Pikachu", 100, 10, "Pika pika!", "Mega Punch");
      expect(poke.type).to.equal("normal");
    });

    it("has a type property which takes newType when argument passed ", () => {
      const poke = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      expect(poke.type).to.equal("grass");
    });
  });
  describe("Pokemon Methods", () => {
    it("has a talk method that returns sound", () => {
      const poke = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const pokeTalk = poke.talk();
      expect(pokeTalk).to.equal("Pika pika!");
    });
    it("has a useYourMove method that returns move", () => {
      const poke = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const pokeMove = poke.useYourMove();
      expect(pokeMove).to.equal("Mega Punch");
    });
  });
});
