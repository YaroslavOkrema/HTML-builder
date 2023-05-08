const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const targetDirPath = path.join(__dirname, 'files2');
  fs.mkdir(targetDirPath, { recursive: true }, err => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach(file => {
      if (file.isFile()) {
        const sourceFilePath = path.join(dirPath, file.name);
        const targetFilePath = path.join(targetDirPath, file.name);
        fs.copyFile(sourceFilePath, targetFilePath, err => {
          if (err) {
            console.error(`Ошибка копирования ${file.name}:`, err);
          } else {
            console.log(`File ${file.name} скопирован успешно`);
          }
        });
      }
    });
  }); 
});
