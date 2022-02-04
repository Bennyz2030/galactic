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

});