const fs = require('fs');
const path = require('path');

const outputBundle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (file.isFile() && path.extname(file.name) === '.css') {
      const filePath = path.join(__dirname, 'styles', file.name);
      const readStream = fs.createReadStream(filePath, 'utf8');
      readStream.pipe(outputBundle, { end: false });
    }
  });

  outputBundle.on('finish', () => {
    console.log('Все файлы были замержены в bundle.css');
  });
});