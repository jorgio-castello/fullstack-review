const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('../helpers/github.js');
const { formatGithubData } = require('../helpers/formatGithubData.js');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  let { term } = req.body;
  // and get the repo information from the github API, then
  getReposByUsername(term, (err, res, body) => {
    if (err || res.statusCode !== 200) { //handle error and non-200 status
      console.log(err);
    } else {
      let data = formatGithubData(JSON.parse(body));

      // //Create the data that we want:
      // let repos = data.map(repo => {
      //   return {
      //     username: repo.owner.login,    //username: owner.login
      //     usernameUrl: repo.owner.url,   //usernameUrl: owner.url
      //     repository: repo.name,         //repository: name
      //     repositoryUrl: repo.html_url,  //repositoryUrl: html_url
      //     stars: repo.stargazers_count,  //stars: stargazers_count
      //     watches: repo.watchers_count,  //watches: watchers_count
      //     forks: repo.forks_count        //forks: forks_count
      //   }

      // });



      console.log(data);
    }
  });


  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

