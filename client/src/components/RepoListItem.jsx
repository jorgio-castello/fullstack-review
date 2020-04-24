import React from 'react';

let RepoItem = ({ forks, watches, stars, repositoryUrl, repository, usernameUrl, username, count }) => {
  return (
    <tr>
      <td>Repo #{count + 1}</td>
      <td class="usernameAndRepo">
        <a href={usernameUrl} target="_blank">{username}</a>
        /
        <a href={repositoryUrl} target="_blank">{repository}</a>
      </td>
      <td>{watches} watches</td>
      <td>{stars} stars</td>
      <td>{forks} forks</td>
    </tr>
  );
};

export default RepoItem;