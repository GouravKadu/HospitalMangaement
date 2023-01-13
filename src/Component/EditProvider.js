import React from 'react'
import { api } from './Constants/Constants';

function EditProvider(props) {
    const [name,setName] = useState('');
    const [email,setEmail]=useState('');      
    const [hospital,setHospital]=useState('');
    
    
    function updateUser()
    {
      let item={name,description,date,taskId}
      console.log("item",item)
     
    
       const res = axios.put(api,{ providerId:providerId,name:name,emailAddress:emailAddress})
       .then((res) => {
        if (res.status === 202) {
          console.log(res);
            Swal.fire({
              text: "Provider Updated successfully.", 
              icon: "success",
              showCancelButton: false,
              timer:1500
            })
          .then (function(){ 
              window.location.reload();
          })
        }
        
      });
      
    }
  return (
    <div>EditProvider</div>
  )
}

export default EditProvider