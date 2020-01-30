function Trainer(newName) {
  this.name = newName;
  this.storage = [];
}

Trainer.prototype.catch = function (pokemon) {
  if (this.storage.length < 6) {
    this.storage.push(pokemon);
  }
  return pokemon.talk();
}

module.exports = Trainer;