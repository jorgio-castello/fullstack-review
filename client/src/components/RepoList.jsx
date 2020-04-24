import React from 'react';
import RepoItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.numberOfRepos} repos.
    <ul>
      { props.repos.map((repo, index) => (
        <RepoItem
          forks={repo.forks}
          watches={repo.watches}
          stars={repo.stars}
          repositoryUrl={repo.repositoryUrl}
          repository={repo.repository}
          usernameUrl={repo.usernameUrl}
          username={repo.username}
          key={repo._id}
          count={index}
        />
      ))}
    </ul>
  </div>
)

export default RepoList;