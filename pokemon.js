function Pokemon(newName, newHealth, newDamage, newSound, newMove, newType) {
  this.name = newName;
  this.health = newHealth;
  this.damage = newDamage;
  this.sound = newSound;
  this.move = newMove;
  this.type = newType || 'normal';
}

module.exports = Pokemon;