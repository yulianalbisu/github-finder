import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/layout/Users';
import Search from './components/layout/Search';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    users: [],
    loading: false
  }

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({ loading: true });     
  // }
// search github users
  searchUsers = async text => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=client_id=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    this.setState({ users: res.data.item, loading: false }); console.log(text);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers}> </Search>
        <Users loading={this.state.loading} users={this.state.users} />   
        </div>
           
  </div>
    );
  } 
}

export default App;
