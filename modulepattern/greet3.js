function Greet (){
  this.greeting = " this is function constractor";
  this.greet = function () {
    console.log(this.greeting);
  }
}

module.exports = new Greet;
