class Trainer {
  constructor(newName) {
    this.name = newName;
    this.storage = [];
  }
  catch (pokemon) {
    if (this.storage.length < 6) {
      this.storage.push(pokemon);
    }
    return pokemon.talk();
  }
}

module.exports = Trainer;