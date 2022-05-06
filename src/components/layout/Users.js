import React, { Component } from 'react';
import UserItem from '../layout/UserItem';

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
        </div>
    );
        }
    }

    const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGrap: '10px'
      }

export default Users;