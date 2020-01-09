describe('FizzBuzz', function() {
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })

  describe('multiples of 3', function() {
    it('prints fizz for 3', function() {
      expect(fizzBuzz.play(3)).toEqual('Fizz');
    })
  })

  describe('multiples of 5', function() {
    it('prints buzz for 5', function() {
      expect(fizzBuzz.play(5)).toEqual('Buzz');
    })
  })

  describe('muptiples of 15', function() {
    it('prints FizzBuzz for 15', function() {
      expect(fizzBuzz.play(15)).toEqual('FizzBuzz');
    })
  })
})
