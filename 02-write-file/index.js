const readline = require('readline');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'text.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Введите текст для записи в файл: ', (answer) => {
  fs.writeFile(filePath, answer, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Текст записан в файл ${filePath}`);
    }
    rl.close();
  });
});