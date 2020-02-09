// to add explanation on weakness/strength into the result messages
// to change the code to console log rounds one by one instead of all at once
"use strict";
const inquirer = require("inquirer");
const {
  Pokemon,
  Bulbasaur,
  Charmander,
  Squirtle,
  Pidgey
} = require("./pokemon");
const Trainer = require("./trainer");
const Battle = require("./battle");

const pokemons = {
  Bulbasaur: new Bulbasaur(),
  Charmander: new Charmander(),
  Squirtle: new Squirtle(),
  Pidgey: new Pidgey()
};

const pokedex = Object.keys(pokemons);
const trainers = [
  "Profession Oak",
  "Drake",
  "Iris",
  "Giovanni",
  "Ash Ketchum",
  "Wallace",
  "Steven",
  "Diantha",
  "Alder",
  "Cynthia"
];

const game = {
  start() {
    inquirer
      .prompt({
        type: "confirm",
        name: "start",
        message:
          "Hello and welcome to your very own Pokemon Game! Do you want to play?",
        default: true
      })
      .then(answers => {
        if (answers.start) {
          console.log("Amazing, let's get you started.");
          game.setUp();
        } else {
          console.log(
            "That's probably wise. Goodbye and have a great day then!"
          );
        }
      });
  },

  setUp() {
    inquirer
      .prompt({
        type: "input",
        name: "player",
        message: "What shall I call you?",
        default: function() {
          return "Magical Trainer";
        }
      })
      .then(answers => {
        const trainer1 = new Trainer(answers.player);
        const trainer2 = new Trainer(
          trainers[Math.floor(Math.random() * trainers.length)]
        );
        console.log(
          `Nice to meet you, ${answers.player}. Let me introduce you to your opponent, ${trainer2.name}.\n Oh, look! Some Pokemons are coming to greet you.`
        );
        game.pokeBall(trainer1, trainer2);
      });
  },

  pokeBall(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "confirm",
        name: "pokeball",
        message: `Do you want to get your Poke Ball out and try to catch one? You will need at least one to battle with ${trainer2.name}.`,
        default: true
      })
      .then(answers => {
        if (answers.pokeball) {
          game.catch(trainer1, trainer2);
        } else {
          console.log(
            "That's probably wise. Goodbye and have a great day then!"
          );
        }
      });
  },

  catch(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "list",
        name: "catch",
        message: "Which Pokemon do you want to catch?",
        choices: pokedex
      })
      .then(answers => {
        const pokemon1 = pokemons[answers.catch];
        trainer1.catch(pokemon1);
        console.log(
          `Well done! You caught ${pokemon1.name}, you'll find them in your bag.`
        );
        const random = pokedex[Math.floor(Math.random() * pokedex.length)];
        const pokemon2 = pokemons[random];
        trainer2.catch(pokemon2);
        let evaluation;
        if (
          (pokemon1.type === "grass" && pokemon2.type === "water") ||
          (pokemon1.type === "water" && pokemon2.type === "fire") ||
          (pokemon1.type === "fire" && pokemon2.type === "grass")
        ) {
          evaluation = `${pokemon1.name} is stronger than ${
            pokemon2.name
          }. This increase ${pokemon1.name}'s damage to ${pokemon1.damage *
            1.25} and decreases ${pokemon2.name}'s damage to ${pokemon2.damage *
            0.75}`;
        } else if (
          (pokemon1.type === "water" && pokemon2.type === "grass") ||
          (pokemon1.type === "fire" && pokemon2.type === "water") ||
          (pokemon1.type === "grass" && pokemon2.type === "fire")
        ) {
          evaluation = `${pokemon2.name} is stronger than ${
            pokemon1.name
          }. This increase ${pokemon2.name}'s damage to ${pokemon2.damage *
            1.25} and decreases ${pokemon1.name}'s damage to ${pokemon1.damage *
            0.75}`;
        } else {
          evaluation = `The pokemons are of the same type.`;
        }
        console.log(
          `${trainer2.name} has also just caught ${pokemon2.name}.\nAfter careful examination you have the following information:\n${pokemon1.name} has ${pokemon1.health} health, can cause ${pokemon1.damage} points of damage as default and is a ${pokemon1.type} pokemon.\n${pokemon2.name} has ${pokemon2.health} health, can cause ${pokemon2.damage} points of damage as default and is a ${pokemon2.type} pokemon.\nYou also know that a grass pokemon is weak against fire but strong against water, a fire pokemon is weak against water but strong against grass and a water pokemon is strong against fire but weak against grass. A normal pokemon has no strength or weakness against other pokemons.\n${evaluation}`
        );
        game.battle(trainer1, trainer2);
      });
  },

  battle(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "confirm",
        name: "battle",
        message: `I think you guys might be ready to battle! Are you ready, ${trainer1.bag[0].name}?`,
        default: true
      })
      .then(answers => {
        if (answers.battle) {
          const battle = new Battle(trainer1, trainer2);
          while (
            battle.pokeToFight1.health > 0 &&
            battle.pokeToFight2.health > 0
          ) {
            battle.fight();
          }
        }
      });
  }
};

game.start();
