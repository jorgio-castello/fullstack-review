import React from 'react';

let RepoItem = ({ forks, watches, stars, repositoryUrl, repository, usernameUrl, username, count }) => {
  return (
    <li>
      <span>Repo #{count + 1}</span>
      <a href={usernameUrl} target="_blank">{username}</a>
      /
      <a href={repositoryUrl} target="_blank">{repository}</a>
      <span>{watches} watches</span>
      <span>{stars} stars</span>
      <span>{forks} forks</span>
    </li>
  );
};

export default RepoItem;