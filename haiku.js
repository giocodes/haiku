var fs = require('fs');

// Log example of buffer readFileSync
//console.log(fs.readFileSync('./cmudict.txt'));

// Function example to readFile

//fs.readFile('helloNode.txt', function (err, data) {
//    //console.log(data.toString());
//    var piece = data.slice(10);
//    console.log(piece);
//    console.log(piece.toString());
//});

function createHaiku(structure) {
    console.log("this should log a haiku with the structure " + structure);
}

module.exports.createHaiku = createHaiku;
//console.log(module);

//

var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit
   lines.forEach(function(line){    
    lineSplit = line.split("  ");    
    console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]); 

  });   
}

//formatData(cmudictFile);

module.exports.formData = formatData(cmudictFile);
