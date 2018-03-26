import sum from './sum';


/**
 * toBe --> checkValue of Function
 * toEqual --> check matcher of object
 */
it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

it('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

it('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

it('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.5);          // This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });