export class GalacticAge {
  constructor(age, lifeExpectency) {
    this.age = age;
    this.lifeExpectency = lifeExpectency;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
  }

  mercury() {
    this.mercuryAge = this.age * 0.24;
    return this.mercuryAge;
    }

  venus() {
    this.venusAge = this.age * 0.62;
    return this.venusAge;
  }

  mars() {
    this.marsAge = this.age * 1.88;
    return this.marsAge;
  }

  jupiter() {
    this.jupiterAge = this.age * 11.86;
    return this.jupiterAge;
  }

  mercuryExpectency() {
    this.mercuryAge = this.age * 0.24;
    this.lifeExpectency = this.lifeExpectency * 0.24;
    return this.lifeExpectency - this.mercuryAge;
    }

  venusExpectency() {
    this.venusAge = this.age * 0.62;
    this.lifeExpectency = this.lifeExpectency * 0.62;
    return this.lifeExpectency - this.venusAge;
    }

}