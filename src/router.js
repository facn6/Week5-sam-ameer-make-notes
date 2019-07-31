const url = require('url');
const handlers = require('./handlers.js');

const router = (req, res) => {
  const { pathname } = url.parse(req.url);

  if (pathname === '/' || pathname === '/style.css' || pathname === '/app.js' || pathname === '/assets/search-icon.png') {
    handlers.homeHandler(req, res);
  } else if (pathname.includes('/api/')) {
    handlers.apiHandler(req, res);
  } else {
    handlers.errorHandler(req, res);
  }
};

module.exports = router;
