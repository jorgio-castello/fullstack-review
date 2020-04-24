import React from 'react';

let RepoItem = ({ forks, watches, stars, repositoryUrl, repository, usernameUrl, username, count }) => {
  return (
    <tr>
      <td>Repo #{count + 1}</td>
      <td className="usernameAndRepo">
        <a href={usernameUrl} target="_blank">{username}</a>
        /
        <a href={repositoryUrl} target="_blank">{repository}</a>
      </td>
      <td className="forksAndStars">{forks} forks</td>
      <td className="forksAndStars">{stars} stars</td>
    </tr>
  );
};

export default RepoItem;