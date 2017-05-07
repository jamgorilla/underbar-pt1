const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just serial numbers, given an array of product objects', () => {
    const products = [
      { product: 'pillowcase', serialNumber: 2398472},
      { product: 'tv stand', serialNumber: 9340898},
      { product: 'armchair', serialNumber: 19748934}
    ];
    const result = _.pluck(products, 'serialNumber');
    expect(result).toEqual([2398472, 9340898, 19748934]);
  });


});