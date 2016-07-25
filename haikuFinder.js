var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
var artOfWar = readCmudictFile('./art.txt');

function readCmudictFile(file) {
    return fs.readFileSync(file).toString();
}

function formatData(data) {
    var lines = data.toString().split("\n"),
        lineSplit
    lines.forEach(function (line) {
        lineSplit = line.split("  ");
        console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]);

    });
}

function countWords(data) {
    var lines = data.toString().split(" "),
        counter = 0;
    lines.forEach(function (line) {
        counter++
    })
    return counter;
}
//console.log(countWords(cmudictFile));

// Create a wordBox object where each key represents a word and its property value is the number of syllables
function createWordBox(data) {
    var lines = data.toString().split("\n"),
        wordsBox = {};
    lines.forEach(function (line) {
            //        console.log(line.split(" ")[0]);
            if (line.match(/\d/g)) {
                //            console.log(line.match(/\d/g).length);
                wordsBox[line.split(" ")[0]] = line.match(/\d/g).length;
            }
        })
        //console.log(Object.keys(wordsBox).length);
    return wordsBox
}

var wordsBox = createWordBox(cmudictFile);

function getSyllables(wordsBox, str) {
    if (wordsBox[str]) {
        console.log(wordsBox[str]);
        return wordsBox[str];
    } else {
        console.log("Word not found")
        return 0
    }
}
getSyllables(wordsBox, "ABEL")

// For each line of the three line poem
// Take a random word from Art of War
// Find the word un the CMUD and return the number of sylablles
// If sylables is less than 5, get another word, compare with CMUD and return