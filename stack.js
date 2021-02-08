//栈

function Stack() {
    this.data = [];
    this.top = 0;
  }
  
  Stack.prototype.push = function (val) {
    this.data[this.top++] = val;
  };
  
  Stack.prototype.pop = function () {
    return this.data[this.top <= 0 ? 0 : --this.top];
  };
  
  Stack.prototype.peak = function () {
    return this.data[this.top - 1];
  };
  
  Stack.prototype.length = function () {
    return this.top;
  };
  
  Stack.prototype.clear = function () {
    this.top = 0;
    this.data = [];
  };
  