
describe('Basic Functions', function () {
    describe('Functions and Identities', function () {
        test('should be function type', function () {
            expect( function () {} ).toBeInstanceOf(Function);
        });
        test('should not be the same function', function () {
            expect( function () {} ).not.toBe( function () {} );
        });
        test('should return undefined', function () {
            expect( (function () {})() ).toBe(undefined);
        });
    });

    describe('Functions That Returns Functions', function () {
        test('should return a function', function () {
            function foo() {
                return ( function () {} )
            }
            expect(foo()).toBeInstanceOf(Function);
        });
        test('should return a function that returns true', function () {
            function fooTrue() {
                return ( function () {
                    return true;
                } )
            }
            expect(fooTrue()()).toBeTruthy();
        });
    });

    describe('Functions with Variable Bindings', function () {
        test('should return if the second called param is equal to the second called one', function () {
            function foo(bar) {
                return (function (copy) {
                    return copy === bar;
                })
            }
            expect(foo(2)(1)).toBeFalsy();
            expect(foo(2)(2)).toBeTruthy();
        });
        test('should return the first called param on any condition', function () {
            function foo(x) {
                return (function (y) {
                    return x;
                });
            }
            expect(foo(1)(2)).toBe(1);
            expect(foo(2)(1)).toBe(2);
        });
        test('should add all the called params', function () {
            function foo(x) {
                return (function (y) {
                    return (function (z) {
                        return x + y + z;
                    });
                });
            }
            expect(foo(1)(2)(3)).toBe(6);
            expect(foo(1)(1)(1)).toBe(3);
        });
    });

    describe('Arguments variable inside a function', function () {
        test('should be able to access the parameters through the arguments variable', function () {
            function foo() {
                return arguments.length;
            }
            expect(foo(1,2)).toBe(2);
            expect(foo(1)).toBe(1);
        });
    });

    describe('Diferent Ways to call a function', function () {
        test('should call the function', function () {
            function foo(a, b) {
                return a + b;
            }
            expect( foo(1,1) ).toBe(2);
            expect( foo.call(this, 1, 1) ).toBe(2);
            expect( foo.apply(this,[1, 1]) ).toBe(2);
        });
    });
});