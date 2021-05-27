const Scene = require('Scene');
const Patches = require('Patches');

Promise.all([
  
Scene.root.findFirst('number'),
Patches.outputs.getScalar('score')

]).then(function(results){
    
var counter = results[0];
var scorestring = results[1];

counter.text = scorestring.toString();

}); 