const fs = require('fs');

fs.readdirSync('.').filter(d => d.startsWith('Day')).forEach(d => {
    let main = require(`./${d}/main.js`);
    console.log(`${d} ${main.part1(main.input)}, ${main.part2(main.input)}`);
});