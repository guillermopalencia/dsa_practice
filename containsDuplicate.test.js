const containsDuplicate = require('./containsDuplicate')

describe('example 1', () => {
    test('returns true or false correctly', () => {
        expect(containsDuplicate([1,2,3,1],3)).toBe(true);
        expect(containsDuplicate([1,0,1,1],1)).toBe(true);
        expect(containsDuplicate([1,2,3,1,2,3],2)).toBe(false);
    });
});