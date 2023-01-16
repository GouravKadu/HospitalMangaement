import React from 'react'
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2';

import { toast, ToastContainer } from 'react-toastify';
import * as ReactBootStrap from "react-bootstrap";
import { api } from './Constants/Constants';
export default function DeleteProvider(props) {
const deleteHandler = ()=>{
  fetch(api+"?providerId="+props.providerId,{
    method:"DELETE",
  }).then((res)=>{
    if(res.status === 200){
      console.log(res);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Provider has been deleted.',
            'success'
          )
        }
      })
      .then(function(){
        window.location.reload();
      })
    }
  })
  };
  return (
    <div>
    
    <ReactBootStrap.Button  
        variant="outline-dark"
        onClick={deleteHandler}
      >Delete</ReactBootStrap.Button>
     
    </div>
  )
}
