const fs = require('fs');
const path = require('path');

const request = require('request');

const apikey = process.env.API_KEY;

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

const transcribeAudio = (filename, cb) => {
  const filepath = path.join(__dirname, '..', 'Assets', filename);

  console.log('sending file =', filepath);

  const config = {
    encoding: 'LINEAR16',
    languageCode: 'en-US',
  };

  const audio = {
    content: fs.readFileSync(filepath).toString('base64'),
  };

  const req = {
    method: 'POST',
    url: googleUrl + apikey,
    body: JSON.stringify({
      config,
      audio,
    }),
  };

  request.post(req, (err, res, jsonBody) => {
    if (err) {
      cb(err);
    }
    const body = JSON.parse(jsonBody);
    console.log('json returned = ', body);
    console.log('json returned results = ', body.results);
    const transcript = body.results.map(result => result.alternatives[0].transcript).join('\n');

    cb(null, transcript);
  });
};


module.exports = {
  folderContents,
  transcribeAudio,
};
