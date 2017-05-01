import glob from 'glob-fs';
import fs from 'fs';

const excludes = {
  name: [
    'test',
  ],
  path: [
    '__generated__',
    'webpack',
  ],
};

function excludeFromArray(array, fileProp) {
  // eslint-disable-next-line
  for (let i = 0; i < array.length; i++) {
    if (fileProp.includes(array[i])) {
      return true;
    }
  }

  return false;
}

function exclude(file) {
  if (excludeFromArray(excludes.name, file.name)) {
    return true;
  }

  if (excludeFromArray(excludes.path, file.relative)) {
    return true;
  }

  return false;
}

const globPattern = glob({ dotfiles: false, gitignore: true })
  .use((file) => {
    if (exclude(file)) {
      // eslint-disable-next-line
      file.exclude = true;
    }

    return file;
  });

globPattern.readdir('**/*.js', (err, files) => {
  const fileCount = files.length;
  const noTestFiles = [];

  files.forEach((file) => {
    const testFile = file.replace('.js', '.test.js');

    if (!fs.existsSync(testFile)) {
      noTestFiles.push(file);
    }
  });

  const testedCount = fileCount - noTestFiles.length;

  if (testedCount !== fileCount) {
    // eslint-disable-next-line
    console.log('Code coverage is not 100%!');
    // eslint-disable-next-line
    console.log('Write tests for the following files:');
    // eslint-disable-next-line
    noTestFiles.forEach(file => console.log(`  ${file}`));

    const percentage = Math.round((testedCount / fileCount) * 100);

    // eslint-disable-next-line
    console.log(`Ratio: ${testedCount}/${fileCount} - ${percentage}%`);

    throw new Error('Code coverage is not 100%!');
  }

  // eslint-disable-next-line
  console.log(`Ratio: ${testedCount}/${fileCount}`);
});
