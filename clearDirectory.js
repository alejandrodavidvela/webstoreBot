// clears all files from directory ./webstoreBot/media/ and sub-directories

const fs = require('fs');
const path = require('path');

const directory = './media/img/Full';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory, file), err => {
      if (err) throw err;
    });
  }
});

const directory2 = './media/img/iPad';

fs.readdir(directory2, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory2, file), err => {
      if (err) throw err;
    });
  }
});

const directory3 = './media/img/Mobile';

fs.readdir(directory3, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory3, file), err => {
      if (err) throw err;
    });
  }
});

const directory4 = './media/PDF';

fs.readdir(directory4, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    fs.unlink(path.join(directory4, file), err => {
      if (err) throw err;
    });
  }
});