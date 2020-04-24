const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  username: String,
  usernameUrl: String,
  repository: String,
  repositoryUrl: String,
  stars: Number,
  watches: Number,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  Repo.create(repos, (err, success) => {
    if(err) {
      callback(err);
    } else {
      callback(null, success);
    }
  });
};

module.exports.save = save;