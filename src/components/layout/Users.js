import React from 'react';
import UserItem from '../layout/UserItem';
// import { Spinner } from './Spinner';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const Users = ({ users, loading }) => {
    if(loading) {
        return <CircularProgress />
    } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
        </div>
    );
        }      
 }

 Users.propTypes = {
     users: PropTypes.array.isRequired,
     loading: PropTypes.bool.isRequired
 }


    const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGrap: '10px'
      }

export default Users;