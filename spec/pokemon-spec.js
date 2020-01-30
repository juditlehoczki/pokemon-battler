const {
  expect
} = require("chai");
const {
  spy
} = require("sinon");
const Pokemon = require("../pokemon.js");

describe("Pokemon", () => {
  it("has a name property when newName argument passed", () => {
    const poke = new Pokemon("Pikachu");
    expect(poke.name).to.equal("Pikachu");
  });

  it("has a health property when newHealth argument passed", () => {
    const poke = new Pokemon("Pikachu", 100);
    expect(poke.health).to.equal(100);
  });

  it("has a damage property when newDamage argument passed", () => {
    const poke = new Pokemon("Pikachu", 100, 10);
    expect(poke.damage).to.equal(10);
  });

  it("has a sound property when newSound argument passed", () => {
    const poke = new Pokemon("Pikachu", 100, 10, 'Pika pika!');
    expect(poke.sound).to.equal('Pika pika!');
  });

  it("has a move property when newMove argument passed", () => {
    const poke = new Pokemon("Pikachu", 100, 10, 'Pika pika!', 'Mega Punch');
    expect(poke.move).to.equal('Mega Punch');
  });

  it("has a type property which defaults to normal when no argument passed ", () => {
    const poke = new Pokemon("Pikachu", 100, 10, 'Pika pika!', 'Mega Punch');
    expect(poke.type).to.equal('normal');
  });

  it("has a type property which takes newType when argument passed ", () => {
    const poke = new Pokemon("Pikachu", 100, 10, 'Pika pika!', 'Mega Punch', 'grass');
    expect(poke.type).to.equal('grass');
  });
});