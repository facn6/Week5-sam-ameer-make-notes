const url = require('url');
const querystring = require('querystring');
const handlers = require('./handlers.js');

const router = (req, res) => {
  const { pathname, query } = url.parse(req.url);

  if (pathname === '/' || pathname === '/style.css' || pathname === '/app.js') {
    handlers.homeHandler(req, res);
  } else if (pathname === '/api/assets') {
    handlers.returnAssets(req, res);
  } else if (pathname.includes('/api/transcribe')) {
    const { file } = querystring.parse(query);
    handlers.returnTranscription(file, res);
  } else {
    handlers.errorHandler(req, res);
  }
};

module.exports = router;
