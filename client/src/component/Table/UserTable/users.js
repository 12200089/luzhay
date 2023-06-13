import React, { useState, useEffect } from "react";
import {toast} from 'react-toastify';
import "./users.css";


const UserTable = () => {
  const[users, setUsers] = useState([]);

  const getUsers = async() => {
      try {
          const response = await fetch("http://localhost:5000/user")
          const jsonData = await response.json() 
          setUsers(jsonData)
      } catch (err) {
          console.log(err.message)
      }
  }

  useEffect(()=>{
      getUsers();
  },[])

      // const handleDelete = async(user_id) => {
      //   try {
      //     const response = await fetch(`http://localhost:8000/auth/users/${user_id}`, {
      //       method: 'DELETE'
      //     });
      //     if (!response.ok) {
      //       throw new Error('Network response was not ok');
      //     }
      //     setUsers(users.filter(user => user.user_id !== user_id));
      //     toast.success('User Delete Successfully', {
      //       position: "top-center",
      //       autoClose: 3000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "light",
      //       });
      //   } catch(err) {
      //     console.error(err);
      //   }
      // }

 
    return (
  <>
    
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user) => {
                const{user_id, user_name, user_email, user_password} = user;
                return (
                <tr key={user_id}>
                    <td data-label='Name'>{user_name}</td>
                    <td data-label='Email'>{user_email}</td>
                    <td data-label='Password'>{user_password}</td>
                    {user_name !== 'Petify_Admin' && (
                  <td data-label='Delete'>
                    <button className="delete_btn" onClick="">Delete</button>
                  </td>
                )}
                </tr>
                )
            })}
              
        </tbody>
    </table>
</>
    );
  }
  export default UserTable;