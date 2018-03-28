import { func, fetchData } from './func';

const texts = ['Wolrd', 'City'];

it('Eqalt output data', () => {
    expect(func()).toEqual({
        name: 'Panupong',
        lastname: 'Chamsomboon'
    }); 
});

it('the fetch Success', async () => {
    expect.assertions(1);
      const data = await fetchData('http://nrzqj.mocklab.io/json/1');
      await expect(typeof data).toBe('object');
  });

it('the fetch Error', async () => {
    expect.assertions(1);
      const data = await fetchData('http://nrzqj.mocklab.io/jsonasdasd/1');
      await expect(typeof data).toBe('string');
  });

texts.map(text => {
    it(`Show Hello ${text}`, () => {
        expect('Hello').toBe('Hello');
    }); 
});

