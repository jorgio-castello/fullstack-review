const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  fullname: String,
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

// .sort({stars: -1, watches: -1, forks: -1})

let findFullNames = callback => {
  Repo.find({})
    .exec((err, results) => {
      if(err) {
        callback(err);
      } else {
        let repos = results.map(repo => repo._doc);
        let fullNames = repos.map(repo => repo.fullname);
        callback(null, fullNames);
      }
    });
};
module.exports.save = save;
module.exports.findFullNames = findFullNames;