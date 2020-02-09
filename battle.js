const {
  Pokemon,
  Bulbasaur,
  Charmander,
  Squirtle,
  Pidgey
} = require("./pokemon.js");
const Trainer = require("./trainer.js");

class Battle {
  constructor(newTrainer1, newTrainer2, n, m) {
    this.trainer1 = newTrainer1;
    this.trainer2 = newTrainer2;
    this.pokeToFight1 = newTrainer1.bag[n || 0];
    this.pokeToFight2 = newTrainer2.bag[m || 0];
    this.whoIsNext = 1;
    this.round = 1;
  }

  fight() {
    let attacker;
    let defender;
    if (this.whoIsNext === 1) {
      attacker = this.pokeToFight1;
      defender = this.pokeToFight2;
      this.whoIsNext++;
    } else if (this.whoIsNext === 2) {
      attacker = this.pokeToFight2;
      defender = this.pokeToFight1;
      this.whoIsNext--;
    }

    let multiplier;
    if (
      (attacker.type === "grass" && defender.type === "water") ||
      (attacker.type === "water" && defender.type === "fire") ||
      (attacker.type === "fire" && defender.type === "grass")
    ) {
      multiplier = 1.25;
    } else if (
      (attacker.type === "water" && defender.type === "grass") ||
      (attacker.type === "fire" && defender.type === "water") ||
      (attacker.type === "grass" && defender.type === "fire")
    ) {
      multiplier = 0.75;
    } else {
      multiplier = 1;
    }

    defender.health -= attacker.damage * multiplier;

    let message;
    if (defender.health > 0) {
      message = `Round \#${this.round}: ${
        attacker.name
      } caused ${attacker.damage * multiplier} point damage to ${
        defender.name
      }. ${defender.name} has ${defender.health} health left.`;
    } else {
      message = `Round \#${this.round}: ${attacker.name} struck with ${attacker.move} (${attacker.sound}) which made ${defender.name} faint. The winner is: ${attacker.name}! Game Over`;
    }

    let result = message;
    this.round++;
    console.log(result);
  }
}

module.exports = Battle;
