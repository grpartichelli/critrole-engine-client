const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors')
app.options('*', cors())


app.use(express.static(__dirname + '/dist/critrole-engine-client'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/critrole-engine-client/index.html'));});
app.listen(process.env.PORT || 8080);
