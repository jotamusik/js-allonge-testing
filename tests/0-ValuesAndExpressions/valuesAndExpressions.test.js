
describe('Values And Expressions', function () {

    describe('Values and Identity', function () {
        test('should be identical', function () {
            expect(2 === 2).toBeTruthy();
            expect('hello' !== 'goodbye').toBeTruthy();
        });
        test('should not be identical', function () {
            expect(2 === '2').toBeFalsy();
            expect(true !== 'true').toBeTruthy();
        });
    });

    describe('Reference Types', function () {
        test('should not be the same', function() {
            expect([2-1, 2, 2+1]).not.toBe([1, 1+1, 1+1+1]);
        });
    });

});
