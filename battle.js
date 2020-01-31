const Pokemon = require("./pokemon.js");
const Trainer = require("./pokemon.js");

class Battle {
  constructor(newTrainer1, newTrainer2) {
    this.trainer1 = newTrainer1;
    this.trainer2 = newTrainer2;
    this.pokeToFight1 = newTrainer1.storage[0];
    this.pokeToFight2 = newTrainer2.storage[0];
    this.poke1health = this.pokeToFight1.health;
    this.poke2health = this.pokeToFight2.health;
    this.poke1damage = this.pokeToFight1.damage;
    this.poke2damage = this.pokeToFight2.damage;
  }

  fight() {}
}

module.exports = Battle;
