var EventEmitter = require('events');
var util = require('util');

function Greeter() {
  this.greetings = "hey this is greeting";
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function (data) {
  console.log(this.greeting);
  this.emit('greet', data );
};

var greet1 = new Greeter();

greet1.on('greet', function(data){
  console.log("for practice purpose: " + data );
});

greet1.greet("Tanvir is lazy , ana ان كسلن");
