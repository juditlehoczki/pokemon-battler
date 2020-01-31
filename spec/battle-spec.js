const {
  expect
} = require("chai");
const {
  spy
} = require("sinon");
const Battle = require("../battle.js");
const Pokemon = require("../pokemon.js");
const Trainer = require("../trainer.js");

describe.only("Battle", () => {
  describe("Battle's properties", () => {
    it("has a trainer1 and trainer2 property when newTrainer1 and newTrainer2 arguments passed", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const pikachu = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      judit.catch(pikachu);
      steve.catch(bulbasaur);
      const battle = new Battle(judit, steve);
      expect(battle.trainer1).to.equal(judit);
      expect(battle.trainer2).to.equal(steve);
    });
    it("has a trainPoke1 property with trainer1's pokemon", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const pikachu = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      judit.catch(pikachu);
      steve.catch(bulbasaur);
      const battle = new Battle(judit, steve);
      expect(battle.pokeToFight1).to.equal(pikachu);
      expect(battle.pokeToFight2).to.equal(bulbasaur);
    });
    it("stores the Pokemons' health value", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const pikachu = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      judit.catch(pikachu);
      steve.catch(bulbasaur);
      const battle = new Battle(judit, steve);
      expect(battle.poke1health).to.equal(100);
      expect(battle.poke2health).to.equal(90);
    });
  });
  describe("Battle's method", () => {
    it("has a fight method which is a function", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const pikachu = new Pokemon(
        "Pikachu",
        100,
        10,
        "Pika pika!",
        "Mega Punch",
        "grass"
      );
      const bulbasaur = new Pokemon(
        "Bulbasaur",
        90,
        8,
        "Bulba bulba!",
        "Mega Kick",
        "water"
      );
      judit.catch(pikachu);
      steve.catch(bulbasaur);
      const battle = new Battle(judit, steve);
      expect(battle.fight).to.be.an("function");
    });
  });
});