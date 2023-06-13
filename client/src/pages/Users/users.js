import React from 'react';
import UserTable from '../../component/Table/UserTable/users';
import './users.css';

const Users = () => {
  return (
    <>
    <section className='users' id='users'>
    <div className="content">
            <h3>USERS</h3>
        </div>
        <UserTable/>

    </section>
    </>
  )
}

export default Users;