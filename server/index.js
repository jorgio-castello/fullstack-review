const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { formatGithubData } = require('../helpers/formatGithubData.js');
const { findFullNames, save } = require('../database/index.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // This route should take the github username provided
  let { term } = req.body;
  // and get the repo information from the github API, then
  getReposByUsername(term, (err, response, body) => {
    if (err || response.statusCode !== 200) { //handle error and non-200 status
      console.log(err);
    } else {
      let currentDbRepoNames = findFullNames((err, fullnames) => {
        if(err) {
          console.log(err);
        } else {
          let data = formatGithubData(JSON.parse(body)) //Obtain data we want to include in the db from response
                        .filter(repo => fullnames.indexOf(repo.fullname) === -1); //Filter repos already in db

          // save the repo information in the database
          save(data, (err, success) => {
            if (err) {
              console.log(err); //log the error if there are any issues
            } else {
              res.status(201); //send back statusCode of 201 if successful save
              res.end();
            }
          });
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

