let formatGithubData = repos => {
  return repos.map(repo => {
    return {
      username: repo.owner.login,    //username: owner.login
      usernameUrl: repo.owner.url,   //usernameUrl: owner.url
      repository: repo.name,         //repository: name
      repositoryUrl: repo.html_url,  //repositoryUrl: html_url
      stars: repo.stargazers_count,  //stars: stargazers_count
      watches: repo.watchers_count,  //watches: watchers_count
      forks: repo.forks_count        //forks: forks_count
    }
  });
};

module.exports.formatGithubData = formatGithubData;

