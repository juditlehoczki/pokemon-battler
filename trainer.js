class Trainer {
  constructor(newName) {
    this.name = newName;
    this.bag = [];
  }
  catch(pokemon) {
    if (this.bag.length < 6) {
      this.bag.push(pokemon);
    }
    return pokemon.talk();
  }
}

module.exports = Trainer;
