function FizzBuzz() {
}

FizzBuzz.prototype.play = function (number) {

    if (this._isDivisibleBy(15, number)) {
    return 'FizzBuzz';
    }

    else if (this._isDivisibleBy(3, number)) {
      return 'Fizz';
    }

    else if (this._isDivisibleBy(5, number)) {
      return 'Buzz';
    }


};

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
}
