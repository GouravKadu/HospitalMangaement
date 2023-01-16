import React, { useState } from 'react'
import { Button ,Form ,FloatingLabel, Container} from 'react-bootstrap';
import { api } from '../Component/Constants/Constants';
import HospitalView from './HospitalView';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
export default function LoginAdmin(props) {
  const history =useNavigate()
  const [input, setInput] = useState({});

  const login=(e)=>{
    e.preventDefault();
    fetch(api+ 'Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "emailAddress": input.emailAddress,
        "password": input.password
      })
    }).then((res) => {
      if (res.status === 202) {
        history("/provider")
      } else {
        
        Swal.fire({
          title: "Wrong Email or Password",
          icon: "error",
          showConfirmButton: false,
          timer:1500
        })
      }
    })
  }
  return (
    <div>
      <Container>
          <Form className="p-3 mt-3">
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >

          <Form.Control
            type="email"
            value={input.emailAddress}
            placeholder='Email Id'
            onChange={(e) => { setInput({ ...input, emailAddress: e.target.value }) }}
             />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Password"
          className="mb-3">
          <Form.Control
            type="password"
            value={input.password}
            placeholder='Password'
            onChange={(e) => { setInput({ ...input, password: e.target.value }) }}
             />
        </FloatingLabel>


        <button className="btn mt-3" onClick={login}>Login</button>


        
      </Form>


      </Container>
    </div>
  )
}
