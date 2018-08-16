
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

});
