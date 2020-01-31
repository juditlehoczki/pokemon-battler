class Pokemon {
  constructor(newName, newHealth, newDamage, newSound, newMove, newType) {
    this.name = newName;
    this.health = newHealth;
    this.damage = newDamage;
    this.sound = newSound;
    this.move = newMove;
    this.type = newType || "normal";
  }
  talk() {
    return this.sound;
  }
  useYourMove() {
    return this.move;
  }
}

//Creating a few Pokemons to catch
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
const charmander = new Pokemon(
  "Charmander",
  95,
  7,
  "Char char!",
  "Jump",
  "fire"
);
const squirtle = new Pokemon("Squirtle", 85, 12, "Squirt squirt!", "Duck");

const pokemonsToCatch = [pikachu, bulbasaur, charmander, squirtle];

module.exports = Pokemon;