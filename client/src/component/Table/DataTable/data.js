import React, { useContext, useEffect, useState } from "react";
// import { PetifyContext } from "../../../context/context";
import {useNavigate} from 'react-router-dom';
// import { toast } from 'react-toastify';
import "./DataTable.css";


const DataDetails = () => {
  
  // let navigate = useNavigate();

  const[songs, setSongs] = useState([]);

  const getSongs = async() => {
      try {
          const response = await fetch("http://localhost:5000/song")
          const jsonData = await response.json() 
          setSongs(jsonData)
      } catch (err) {
          console.log(err.message)
      }
  }

  useEffect(()=>{
      getSongs();
  },[])

  // const handleDelete = async(id) => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/data/${id}`, {
  //       method: 'DELETE'
  //     });
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     setPets(pets.filter(pet => pet.id !== id));
  //     toast.success('Data Delete Successfully', {
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
  // };
  

  // const handleUpdate = (id) => {
  //   navigate(`/updatedataform/${id}`)
  // };
 
    return (
  <>
    
    <table className="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Author</th>
                <th scope="col">Category</th>
                <th scope="col">Image</th>
                <th scope="col">Song</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
          {songs.map((songs) => {
            const{name, author, type, img, song} = songs;
            return (
              <tr key={song.id}>
              <td data-label='Name'>{name}</td>
              <td data-label='Author'>{author}</td>
              <td data-label='Category'>{type}</td>
              <td data-label='Image'><img src={`http://localhost:5000/image/${img}`} alt="Pet" /></td>
              <td data-label='Song'>
                <audio controls>
                    <source src={`http://localhost:5000/image/${song}`} type="audio/mpeg" />
                </audio>
              </td>
              <td data-label='Edit'><button className="edit_btn" onClick="">Edit</button></td>
              <td data-label='Delete'><button className="delete_btn" onClick="">Delete</button></td>
            </tr>
            )
            
          })}
            
        </tbody>
    </table>
</>
    );
  }
  export default DataDetails;