import React from 'react'
import { Nav,Navbar,NavDropdown,Container,Form,Button} from 'react-bootstrap'
import { useEffect,useState } from 'react'
import axios from 'axios'

import * as ReactBootStrap from 'react-bootstrap';
import { api } from './Constants/Constants'
import AddProviderForm from './AddProviderForm';
import DeleteProvider from './DeleteProvider';


export default function ProivderList() {
  const [hospital, setHospital]= useState({})
  const [id, setId]=useState(1)
  const [provider,setProvider]=useState({blogs:[]});

  const fetchProviderTable = async()=>{
    const {data} = await axios(api)
    setProvider({blogs:data})
    // console.log(data)
  }

useEffect(() => {
  fetchProviderTable();
},[])
  
return(
    <div>
      <Container>
      <ReactBootStrap.Table>
        <thead>
          <tr>          
          
          <th>Name</th>
          <th>Email Address</th>
          <th>Actions</th>
          </tr>
        </thead>
      <tbody>
        {provider.blogs.map((item)=><tr key={item.providerId}>
      <td>{item.providerName}</td>
      <td>{item.emailAddress}</td>

      <td>
        {/* {console.log(item.providerId) } */}
        <DeleteProvider providerId={item.providerId}/>
      </td>
      
        </tr>
        )}
      </tbody>
      </ReactBootStrap.Table>
      </Container>
    </div>
)
}