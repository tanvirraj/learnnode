// var Emitter = require('./emitter');

var Emitter = require('events');

var emit = new Emitter();

emit.on('openfile', function(){
  console.log("the first file is open");
});


emit.on('openfile', function(){
  console.log("again the file is open");
});

emit.on('closefile', function(){
  console.log("the file is close");
});

emit.on('closefile', function(){
  console.log("please close the fille that you are open few hour ago ");
});

console.log("--------------");
emit.emit('closefile')
console.log("--------------");
emit.emit('openfile');

console.log("--------------");
console.log("--------------");
console.log("--------------");

console.log(emit);
