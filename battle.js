const {
  Pokemon,
  Bulbasaur,
  Charmander,
  Squirtle,
  Pidgey
} = require("./pokemon.js");
const Trainer = require("./pokemon.js");

class Battle {
  constructor(newTrainer1, newTrainer2, n, m) {
    this.trainer1 = newTrainer1;
    this.trainer2 = newTrainer2;
    this.pokeToFight1 = newTrainer1.bag[n || 0];
    this.pokeToFight2 = newTrainer2.bag[m || 0];
    this.p1health = this.pokeToFight1.health;
    this.p2health = this.pokeToFight2.health;
    this.p1damage = this.pokeToFight1.damage;
    this.p2damage = this.pokeToFight2.damage;
    this.p1sound = this.pokeToFight1.sound;
    this.p2sound = this.pokeToFight2.sound;
    this.p1move = this.pokeToFight1.move;
    this.p2move = this.pokeToFight2.move;
    this.p1type = this.pokeToFight1.type;
    this.p2type = this.pokeToFight2.type;
    this.whoIsNext = 1;
  }

  fight() {}
}

module.exports = Battle;
