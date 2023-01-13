import axios, { Axios } from 'axios';
import React, { useState } from 'react'
import { InputGroup, Modal,Button } from 'react-bootstrap';
import { api } from './Constants/Constants';
import Swal from "sweetalert2";
import * as ReactBootStrap from "react-bootstrap";

export default function AddProviderForm() 
{
const [name,setName] = useState('');
const [email,setEmail]=useState('');                                                                                                               
const [password,setPassword]=useState('');
const [hospital,setHospital]=useState('');

const [show,setShow]=useState(false);

const AddProvider =(e)=>
  {
    e.preventDefault();
    fetch(`${api}/adduser`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "providerName": name,
        "emailAddress": email,
        "password": password,
        "hospitalId": hospital
        })
    }).then(res => {
      if (res.status === 201) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Provider added successfully',
          showConfirmButton: false,
          timer: 1300
        })
        .then(function(){
            window.location.reload()
          })
      } else {
        Swal.fire({
          position:'center',
          title: "Provider Not Added",
          icon: "error",
          showConfirmButton: false,
          timer: 1300
        })
        .then(function(){
            window.location.reload()
          })
      }
    })
  }
    

  return (
    <>
    <ReactBootStrap.Button onClick={()=>setShow(true)}>
        Add
    </ReactBootStrap.Button>

    <Modal
    show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title">

        <Modal.Header closeButton>
          <Modal.Title
            id="example-custom-modal-styling-title"
            style={{ textAlign: "center" }}
          >
            Add New Provider
          </Modal.Title>
        </Modal.Header>   

        <Modal.Body className="modalBody">
            
           <ReactBootStrap.FormLabel className='inputbox'>Name</ReactBootStrap.FormLabel>
            <input className='inputbox' type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>


            <ReactBootStrap.FormLabel className='inputbox'>Email Address</ReactBootStrap.FormLabel>
            <input className='inputbox' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            
            <ReactBootStrap.FormLabel className='inputbox'>Hospital Number</ReactBootStrap.FormLabel>
            <input className='inputbox' type="text" value={hospital} onChange={(e)=>{setHospital(e.target.value)}}></input>
            
            <ReactBootStrap.FormLabel className='inputbox'>Password</ReactBootStrap.FormLabel>
            <input className='inputbox' type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        
        
        </Modal.Body>

        <Button variant="primary" onClick={AddProvider}>Submit</Button>

        {/* <Button variant="secondary" >Close</Button> */}
    </Modal>

    </>
  )

}