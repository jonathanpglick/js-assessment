define([ 'use!underscore' ], function(_) {
  describe("flow control", function() {
    var fn;

    beforeEach(function() {
      fn = function() { };
    });

    it("you should be able to conditionally branch your code", function() {
      fn = function(i) {
        // write a function that receives a number as its argument;
        // if the number is divisible by 3, the function should return 'fizz';
        if (i % 3 === 0) {
          return 'fizz';
        }
        else if (i % 5 === 0) {
          return 'buzz'
        }
        // if the number is divisible by 5, the function should return 'buzz';
        // if the number is divisible the 3 and 5, the function should return
        // 'fizzbuzz';
        // otherwise the function should return the number
        return i;
      };

      // replace the following test with tests that prove your function works
      expect(fn()).to.be.ok();
    });

    it("you should be able to work with logical operators", function() {
      var and = function(val1, val2) {
            // write a function that makes the tests below pass
            if (val1 === true && val2 === true) {
              return true;
            }
            return false;
          },

          or = function(val1, val2) {
            // write a function that makes the tests below pass
            if (val1 === true || val2 === true) {
              return true;
            }
            return false;
          };

      expect(and(false, false)).not.to.be.ok();
      expect(and(true, false)).not.to.be.ok();
      expect(and(true, true)).to.be.ok();

      expect(or(true, false)).to.be.ok();
      expect(or(true, true)).to.be.ok();
      expect(or(false, false)).not.to.be.ok();
    });
  });

});
