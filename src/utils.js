const fs = require('fs');

const folderContents = (dir, cb) => {
  fs.readdir(dir, (err, files) => {
    console.log(files);
    if (err) {
      cb(err);
    } else {
      cb(null, files);
    }
  });
};

module.exports = {
  folderContents,
};
