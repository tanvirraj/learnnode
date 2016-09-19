/**
 * Created by tanvir on 9/14/16.
 */

var greetings = require('./greetings.json');

var english = function(){
    console.log(greetings.en);
}

module.exports  = english;