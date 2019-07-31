const fs = require('fs');
// const speech = require('@google-cloud/speech');
const request = require('request');
const apikey = require('../authFiles/keys.js');

const googleUrl = 'https://speech.googleapis.com/v1p1beta1/speech:recognize?key=';


const folderContents = (dir, cb) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      cb(err);
    } else {
      cb(null, files);
    }
  });
};

const transcribe = (filename) => {
  const config = {
    encoding: 'LINEAR16',
    languageCode: 'en-US',
  };

  const audio = {
    content: fs.readFileSync(filename).toString('base64'),
  };

  // const body = {
  //   config,
  //   audio,
  // };

  const req = {
    method: 'POST',
    url: googleUrl + apikey.GOOGLE,
    body: JSON.stringify({
      config,
      audio,
    }),
  };

  request.post(req, (err, res, jsonBody) => {
    if (err) {
      return console.error('upload failed:', err);
    }
    const body = JSON.parse(jsonBody);
    const transcript = body.results.map(result => result.alternatives[0].transcript).join('\n');
  });
};


module.exports = {
  folderContents,
  transcribe,
};
