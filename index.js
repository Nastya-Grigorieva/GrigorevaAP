const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//test build
rl.question('Сколько вам лет? ', (age) => {
    console.log(`Вам ${age} лет`);
    rl.close(); 
});
