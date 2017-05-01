import glob from 'glob-fs';

// // options is optional
// glob('(**/*.js)', [], (er, files) => {
//   // files is an array of filenames.
//   // If the `nonull` option is set, and nothing
//   // was found, then files is ["**/*.js"]
//   // er is an error object or null.
//   console.log(files);
// });


glob({ dotfiles: false })
  // .exclude(/__generated__/)

  .readdir('**/*.js', (err, files) => {
    console.log(files);
  });
