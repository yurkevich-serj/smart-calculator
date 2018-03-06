class SmartCalculator {
  constructor(initialValue) {
     this.Value = initialValue.toString();
  }

  add(number) {
    this.Value += '+' + number.toString();
    return this;
  }
  
  subtract(number) {
    this.Value += '-' + number.toString();
    return this;
  }

  multiply(number) {
    this.Value += '*' + number.toString();
    return this;
  }

  devide(number) {
    this.Value += '/' + number.toString();
    return this;
    
  }

  pow(number) {
    this.Value += '**' + number.toString();
    return this;
  }
  toString(){
    return eval(this.Value);
  }
}

module.exports = SmartCalculator;
