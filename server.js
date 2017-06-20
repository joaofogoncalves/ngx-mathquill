// Run this with ts-node (https://github.com/TypeStrong/ts-node)

const express = require('express');
const path = require('path');

const server = express();

const distPath = path.join(__dirname, '/');

server.use(express.static(distPath));


// redirect everything to index
server.get('*', (req, res) => {
  res.status(200).sendFile(path.join(distPath, 'index.test.html'));
});

const port = process.argv[2] || 4243;
server.listen(port, function() {
  console.log('server listening on port ' + port);
});
