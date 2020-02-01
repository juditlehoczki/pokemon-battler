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
    it("correctly changes the attacker/defender position on this.whoIsNext", () => {
      const judit = new Trainer("Judit");
      const chris = new Trainer("Chris");
      const bulb = new Bulbasaur();
      const char = new Charmander();
      judit.catch(bulb);
      chris.catch(char);
      const battle = new Battle(judit, chris);
      expect(battle.whoIsNext).to.equal(1);
      battle.fight();
      expect(battle.whoIsNext).to.equal(2);
      battle.fight();
      expect(battle.whoIsNext).to.equal(1);
      battle.fight();
      expect(battle.whoIsNext).to.equal(2);
    });
    it("correctly assigns 0.75/1/1.25 to multiplier", () => {
      const judit = new Trainer("Judit");
      const chris = new Trainer("Chris");
      const bulb = new Bulbasaur();
      const char = new Charmander();
      judit.catch(bulb);
      chris.catch(char);
      const battle = new Battle(judit, chris);
      battle.fight();
      //Charmander is fire, Bulbasaur is grass so Bulbasaur is weak, should get a multiplier of 0.75 on his 100 damage => 75
      expect(char.health).to.equal(705); //780 - 75 = 705
    });
  });
});
