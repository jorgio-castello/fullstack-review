import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRepos: 0, //This piece of state represents how many total repos are in the database
      repos: [] //This will feature an array of objects, representative of the top 25 repos
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url:"http://127.0.0.1:1128/repos",
      success: data => {
        let { numberOfRepos, repos } = data; //Object destructuring: obtain numberOfRepos, and repos from data
        this.setState({ //Update state with the data we receive from the get request
          numberOfRepos,
          repos
        });
      }
    });
  }

  //Send an Ajax "post request to the server located at "http://127.0.0.1:1128/repos
  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      type:"POST",
      url:"http://127.0.0.1:1128/repos",
      data: { term }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));