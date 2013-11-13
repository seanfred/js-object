


function Computer(type, processor, ram, monitor) {
  this.type = type;
  this.processor = processor;
  this.ram = ram;
  this.monitor = monitor;
  this.toString = function () {
    return "Here is a brand new " + this.type + " with an " + this.processor
    + " and a screen that is " + this.monitor;
  };
}
var computer = new Computer("samsung", "intel", "8gb", "17 in");
console.log(computer.toString());

