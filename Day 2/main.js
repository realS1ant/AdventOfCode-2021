const { readFileSync } = require('fs');
const path = require('path');
const input = readFileSync(path.join(__dirname, 'input.txt'), 'utf8').split('\n');
const test = readFileSync(path.join(__dirname, 'test.txt'), 'utf8').split('\n');

function part1(input) {
    let hor = 0;
    let depth = 0;
    input.forEach(l => {
        let line = l.split(' ');
        if (line[0] == 'forward') hor += +line[1];
        if (line[0] == 'down') depth += +line[1];
        if (line[0] == 'up') depth -= +line[1];
    });
    return (hor * depth);
}

function part2(input) {
    let hor = 0;
    let depth = 0;
    let aim = 0;
    input.forEach(l => {
        let line = l.split(' ');
        if (line[0] == 'forward') {
            hor += +line[1];
            depth += aim * +line[1];
        };
        if (line[0] == 'down') aim += +line[1];
        if (line[0] == 'up') aim -= +line[1];
    });
    return (hor * depth);
}

// console.log(part1(input));
// console.log(part2(input));

module.exports = { part1, part2, input };