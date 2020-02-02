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
        console.log(
          `${trainer2.name} has also just caught ${pokemon2.name}. I think you guys might be ready for battle!`
        );
        game.battle(trainer1, trainer2);
      });
  },

  battle(trainer1, trainer2) {
    inquirer
      .prompt({
        type: "confirm",
        name: "battle",
        message: `Let the battle being. Is ${trainer1.bag[0].name} ready?`,
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
