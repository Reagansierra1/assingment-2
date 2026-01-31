const fs = require('fs');


function readFile(filePath){
    return fs.readFileSync(filePath, 'utf8');
}

function totalWords(textStr){
    textStr = textStr.replaceAll("\n", " ");
    return textStr.split(" ").length;
}

function findLongestWord(textStr){
    textStr = textStr.replaceAll("\n", " ");
    textStr = textStr.replaceAll(".", " ");
    textStr = textStr.replaceAll(",", " ");
    textStr = textStr.replaceAll("!", " ");
    textStr = textStr.replaceAll("?", " ");
    textStr = textStr.replaceAll("'", " ");
    const words = textStr.split(" ");
    let charAmt = 0;
    let longestWord = "";
    for(const word of words){
        if(word.length > charAmt){
            charAmt = word.length;
            longestWord = word
        }
    }
    return longestWord;
}

function totalLines(textStr){
    const words = textStr.split("\n");
    return words.length;
}

function readAndAnalyzeTextFile(filePath){
    const contentStr = readFile(filePath);

    console.log('Number of words: ', totalWords(contentStr));
    console.log('Longest word: ', findLongestWord(contentStr));
    console.log('Number of lines: ', totalLines(contentStr));
}

module.exports = {readFile, totalWords, findLongestWord, totalLines, readAndAnalyzeTextFile};

//test section
readAndAnalyzeTextFile("data/quotes.txt")
readAndAnalyzeTextFile("data/sample-text.txt")