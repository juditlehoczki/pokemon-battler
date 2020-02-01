class Pokemon {
  constructor(newName, newHealth, newDamage, newSound, newMove, newType) {
    this.name = newName;
    this.health = newHealth || 750;
    this.damage = newDamage || 100;
    this.sound = newSound || this.name;
    this.move = newMove || "Closes eyes...";
    this.type = newType || "normal";
  }
  talk() {
    return this.sound;
  }
  useYourMove() {
    return this.move;
  }
}

class Bulbasaur extends Pokemon {
  constructor() {
    super("Bulbasaur", 800, 100, "Bulbasaur!", "Vine Whip", "grass");
  }
}
class Charmander extends Pokemon {
  constructor() {
    super("Charmander", 780, 104, "Charmander!", "Fire Punch", "fire");
  }
}
class Squirtle extends Pokemon {
  constructor() {
    super("Squirtle", 790, 103, "Squirtle!", "Bubble Beam", "water");
  }
}
class Pidgey extends Pokemon {
  constructor() {
    super("Pidgey", 830, 80, "Pidgey!", "Peck");
  }
}

module.exports = { Pokemon, Bulbasaur, Charmander, Squirtle, Pidgey };
