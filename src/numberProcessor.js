const fs = require('fs');


function readFile(filePath){
    return fs.readFileSync(filePath, 'utf8');
}

function calculateSum(listOfNums){
    if(listOfNums.length === 0){
        return 0;
    }
    let sum = 0;
    for(const num of listOfNums){
        sum += num;
    }
    return sum;
}

function minAndMax(listOfNums){
    if(listOfNums.length === 0){
        return [0,0];
    }
    const min = Math.min(...listOfNums);
    const max = Math.max(...listOfNums);
    return [min, max];
}

function calculateAverage(listOfNums){
    if(listOfNums.length === 0){
        return 0;
    }
    const sum = calculateSum(listOfNums);
    return sum / listOfNums.length; 
}

function processNumberFile(filePath){
    const contentStr = readFile(filePath);
    let numList = contentStr.split("\n");
    for(let i = 0; i < numList.length; i++){
        numList[i] = Number(numList[i]);
    }

    console.log('Sum: ', calculateSum(numList));
    console.log('Min and Max: ', minAndMax(numList));
    console.log('Average: ', calculateAverage(numList));
}

module.exports = {readFile, calculateSum, minAndMax, calculateAverage, processNumberFile};

//test section
processNumberFile("data/sample-numbers.txt");