function name(callback){
  console.log("hello");
  var fullname = {
    fname: "tanvir",
    lname: "raj"
  }
  callback(fullname);
};


name(function(fullname){
  console.log("this is first callback ");
  console.log(fullname.fname +' ' + fullname.lname);
});


name(function(fullname){
  console.log("this is second callback ");
  console.log(fullname.fname +' ' + fullname.lname);
})
