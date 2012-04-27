define([ 'use!underscore' ], function(_) {
  describe("the module pattern", function() {
    var fn = function() {};

    it("you should be able to create a function that returns a module", function() {
      fn = function() {
        // write a function that makes the tests pass
        return {
          greeting: arguments[0],
          name: arguments[1],
          sayIt: function() {
            return [this.greeting, this.name].join(', ');
          }
        };
      };

      var module = fn('hello', 'matt');
      expect(module.name).to.be.ok();
      expect(module.greeting).to.be.ok();
      expect(module.sayIt).to.be.a('function');
      expect(module.sayIt()).to.be('hello, matt');
    });
  });
});
