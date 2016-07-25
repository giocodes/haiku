var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

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

//formatData(cmudictFile);

// Word Counter

function countWords(data) {
    var lines = data.toString().split("\n"),
        counter = 0;
    lines.forEach(function (line) {
        counter++
    })
    return counter;
}
console.log(countWords(cmudictFile));

// File to Object
function orderWords(data) {
    var lines = data.toString().split("\n"),
        wordsBox = {};
    lines.forEach(function (line) {
//    console.log(line.match(/\d/g));
        if(line.match(/\(\d\)/)){
            var index = line.match(/\(\d\)/).index;
            line = line.slice(0,index-1)+line.slice(index+3)    
        }
        
        if (line.match(/\d/g)) {
        var syllables = line.match(/\d/g).length,
            justWord = line.split(" ").shift();
        }
        if (!wordsBox[syllables]) {
            wordsBox[syllables] = []
        };
        wordsBox[syllables].push(justWord);
    })
    return wordsBox;
}
var wordsBox = orderWords(cmudictFile);
//console.log(Object.keys(wordsBox));

// Create Haiku

function randomWord(wordsBox,syllables){
//    console.log(syllables);
    var result = "";
    syllables.forEach(function(syllable){
        result += " " + wordsBox[syllable][Math.floor(Math.random() * wordsBox[syllable].length)];
    })
    return result
}

function myCreateHaiku(wordsBox,num1,num2,num3){
    var line1 = randomWord(wordsBox,num1);
    var line2 = randomWord(wordsBox,num2);
    var line3 = randomWord(wordsBox,num3);
    return line1 + "\n" + line2 + "\n" + line3
}
console.log(myCreateHaiku(wordsBox,[5],[7],[5]));
console.log(myCreateHaiku(wordsBox,[2,3],[1,3,3],[3,2]));

//function createHaiku(structure, syllabelsArr) {
//    var arrOfWords;
//    return structure.map(function (lines) {
//        return lines.map(function (syls) {
//            arrOfWords = syllabelsArr[syls];
//            return arrOfWords[Math.floor(Math.random() * arrOfWords.length)];
//        }).join(' ');
//    }).join('\n');
//}