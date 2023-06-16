class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfPeople = 0;
    let currentVamp = this;

  
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfPeople++;
    }

    return numberOfPeople;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    const distanceToRootThis = this.numberOfVampiresFromOriginal;
    const distanceToRootVamp = vampire.numberOfVampiresFromOriginal;
    if (distanceToRootThis < distanceToRootVamp) {
      return true;
    }
    return false;
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (name === undefined) {
      return null;
    }

    if (this.name === name) {
      return this;
    }
    if (this.offspring.length === 0) {
      return null;
    }

    for (let item of this.offspring) {
      if (item.vampireWithName(name)) {
        return item.vampireWithName(name);
      }
    }
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    if (this.offspring.length === 0) {
      return 0;
    }

    let total = this.offspring.length;
    for (let item of this.offspring) {
      total += item.totalDescendents;
    }
    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let arr = [];
    if (this.yearConverted > 1980) {
      arr.push(this);
    }

    if (this.offspring.length === 0) {
      return arr;
    }

    for (let item of this.offspring) {
      arr.push(item.allMillennialVampires);
    }
    return arr.flat();
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    let currentVamp1 = this;
    let currentVamp2 = vampire;
    let creatorList = [];
    // if current vampire
    if (currentVamp1.name === currentVamp2.name) {
      return currentVamp2;
    }
    creatorList.push(currentVamp1.name);
    while (currentVamp1.creator) {
      currentVamp1 = currentVamp1.creator;
      creatorList.push(currentVamp1.name);
    }

    while (currentVamp2) {
      if (creatorList.includes(currentVamp2.name)) {
        return currentVamp2;
      }
      currentVamp2 = currentVamp2.creator;
    }
  }
}

module.exports = Vampire;

