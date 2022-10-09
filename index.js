const http = require('http');
const routes = require('./routes');

const PORT = 5001;

const server = http.createServer((req, res) => {
  const { url } = req;

  let route = '';
  let statusCode = 200;

  if (url === '/') {
    route = 'home';
  } else {
    route = url.split('/')[1];

    if (!Object.keys(routes).includes(route)) {
      route = 'notFound';
      statusCode = 404;
    }
  }

  res.writeHead(statusCode, { 'Content-Type': 'text/html' });
  res.write(routes[route]);
  res.end();
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
