import { sumMajorCredits, sumMinorCredits } from '../main';

describe('Credits functions', () => {
  test('sumMajorCredits returns correct sum and brand', () => {
    const result = sumMajorCredits(
      { credits: 40, brand: 'major' },
      { credits: 20, brand: 'major' }
    );
    expect(result).toEqual({ credits: 60, brand: 'major' });
  });

  test('sumMinorCredits returns correct sum and brand', () => {
    const result = sumMinorCredits(
      { credits: 5, brand: 'minor' },
      { credits: 15, brand: 'minor' }
    );
    expect(result).toEqual({ credits: 20, brand: 'minor' });
  });
});
