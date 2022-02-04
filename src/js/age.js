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
    this.mercuryAge = this.age * .24;
    return this.mercuryAge;
    }

  venus() {
    this.venusAge = this.age * .62;
    return this.venusAge;
  }

  mars() {
    this.marsAge = this.age * 1.88;
    return this.marsAge;
  }



}