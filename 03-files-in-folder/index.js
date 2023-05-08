const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Файлы в secret-folder:');
  files.forEach(file => {
    console.log(file);
  });
});
