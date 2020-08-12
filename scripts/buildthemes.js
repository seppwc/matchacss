const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

fs.readdir(path.join(__dirname, '..', 'src/themes'), (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  files.forEach((f) => {
    const srcPath = path.resolve(
      __dirname,
      path.join(__dirname, '..', 'src/themes', f)
    );

    const distPath = path.resolve(
      __dirname,
      path.join(__dirname, '..', 'dist/themes', f.split('.')[0] + '.css')
    );

    const child = spawn('sass', ['--no-source-map', srcPath, distPath]);
  });
});
