const { readFileSync } = require('fs');
const path = require('path');
const it = '\n';
const input = readFileSync(path.join(__dirname, 'input.txt'), 'ascii').split(it);
const test = readFileSync(path.join(__dirname, 'test.txt'), 'ascii').split(it);

function part1(input) {
    let inc = 0;
    input.forEach((depth, index) => {
        if (index < 1) return;
        if (+input[index - 1] < +depth) inc++;
    });
    return inc;
}

function part2(input) {
    let inc = 0;
    for (let i = 1; i <= input.length - 2; i++) {
        if (+input[i - 1] < +input[i + 2]) inc++;
    }
    return inc;
}

// console.log(part1(input));
// console.log(part2(input));

module.exports = { part1, part2, input };
