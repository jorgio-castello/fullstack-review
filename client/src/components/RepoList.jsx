import React from 'react';
import RepoItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.numberOfRepos} repos total in the database.
    <br></br>
    <br></br>
    <table>
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
    </table>
  </div>
)

export default RepoList;