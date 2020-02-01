const { expect } = require("chai");
const Battle = require("../battle.js");
const {
  Pokemon,
  Bulbasaur,
  Charmander,
  Squirtle,
  Pidgey
} = require("../pokemon.js");
const Trainer = require("../trainer.js");

describe("Battle", () => {
  describe("Battle's properties", () => {
    it("has a trainer1 and trainer2 property when newTrainer1 and newTrainer2 arguments passed", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const squirtle = new Squirtle();
      const pidgey = new Pidgey();
      judit.catch(squirtle);
      steve.catch(pidgey);
      const battle = new Battle(judit, steve);
      expect(battle.trainer1).to.equal(judit);
      expect(battle.trainer2).to.equal(steve);
    });
    it("has a trainPoke1 and trainPoke2 property with trainer1 and trainer2's pokemons", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const squirtle = new Squirtle();
      const pidgey = new Pidgey();
      judit.catch(squirtle);
      steve.catch(pidgey);
      const battle = new Battle(judit, steve);
      expect(battle.pokeToFight1).to.equal(squirtle);
      expect(battle.pokeToFight2).to.equal(pidgey);
    });
    it("stores the Pokemons' health, damage, sound, move and and type values", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const bulbasaur = new Bulbasaur();
      const charmander = new Charmander();
      judit.catch(bulbasaur);
      steve.catch(charmander);
      const battle = new Battle(judit, steve);
      expect(battle.p1health).to.equal(800);
      expect(battle.p2health).to.equal(780);
      expect(battle.p1damage).to.equal(100);
      expect(battle.p2damage).to.equal(104);
      expect(battle.p1sound).to.equal("Bulbasaur!");
      expect(battle.p2sound).to.equal("Charmander!");
      expect(battle.p1move).to.equal("Vine Whip");
      expect(battle.p2move).to.equal("Fire Punch");
      expect(battle.p1type).to.equal("grass");
      expect(battle.p2type).to.equal("fire");
    });
    it("has a whoIsNext property that defaults to 1", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const bulbasaur = new Bulbasaur();
      const charmander = new Charmander();
      judit.catch(bulbasaur);
      steve.catch(charmander);
      const battle = new Battle(judit, steve);
      expect(battle.whoIsNext).to.equal(1);
    });
  });
  describe("Battle's method", () => {
    it("has a fight method which is a function", () => {
      const judit = new Trainer("Judit");
      const steve = new Trainer("Steve");
      const bulbasaur = new Bulbasaur();
      const charmander = new Charmander();
      judit.catch(bulbasaur);
      steve.catch(charmander);
      const battle = new Battle(judit, steve);
      expect(battle.fight).to.be.an("function");
    });
  });
});
