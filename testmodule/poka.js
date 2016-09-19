function Name() {
  this.firstname = "my first name";
  this.fname = function () {
    console.log(this.firstname);
  };
  this.lname = function() {
    this.last_name = "my last name ta ta ";
    console.log(this.last_name);
  }

}

module.exports = new Name;
