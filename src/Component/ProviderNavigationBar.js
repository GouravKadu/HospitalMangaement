import React from 'react'
import { Nav,Navbar,NavDropdown,Container,Form,Button} from 'react-bootstrap'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { api } from './Constants/Constants'




export default function ProviderNavigationBar() {
  const [hospital, setHospital]= useState({})
  const [id, setId]=useState(1)

  useEffect(()=>{axios.get(api)
  .then(res=>{
      setHospital(res.data)
  })
  .catch(err=>{console.log(err)}
  )
  
},[])

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Provider Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Provider List</Nav.Link>s
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
