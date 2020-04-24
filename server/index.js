const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { formatGithubData } = require('../helpers/formatGithubData.js');
const { save } = require('../database/index.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  let { term } = req.body;
  // and get the repo information from the github API, then
  getReposByUsername(term, (err, response, body) => {
    if (err || response.statusCode !== 200) { //handle error and non-200 status
      console.log(err);
    } else {
      let data = formatGithubData(JSON.parse(body));
      // save the repo information in the database
      save(data, (err, success) => {
        if (err) {
          console.log(err);
        } else {
          res.status(201);
          res.end();
        }
      });
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

