import { GalacticAge } from '../src/js/age.js';

describe('GalacticAge', () => {

  let input;

  beforeEach(() => {
    input = new GalacticAge(40, 80)
  });

  test('should correctly determine the users age on Mercury', () => {
    input.mercury();
    expect(input.mercuryAge).toEqual(9.6);
  });
  
  test('should correctly determine the users age on Venus', () => {
    input.venus();
    expect(input.venusAge).toEqual(24.8);
  });

  test('should correctly determine the users age on Mars', () => {
    input.mars();
    expect(input.marsAge).toBeCloseTo(75.2);
  });

  test('should correctly determine the users age on Jupiter', () => {
    input.jupiter();
    expect(input.jupiterAge).toBeCloseTo(474.4);
  });

  test('should determine the users remaining years on Mercury', () => {
    expect(input.mercuryExpectency()).toEqual(9.6);
  });

  test('should determine the users remaining years on Venus', () => {
    expect(input.venusExpectency()).toEqual(24.8);
  });

  test('should determine the users remaining years on Mars', () => {
    expect(input.marsExpectency()).toBeCloseTo(75.2)
  });

  test('should determine the users remaining years on Jupiter', () => {
    expect(input.jupiterExpectency()).toBeCloseTo(474.4);
  });
});

describe('GalacticAge', () => {

  let input;

  beforeEach(() => {
    input = new GalacticAge(80, 40)
  });
});