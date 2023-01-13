import React,{useEffect,useState} from "react";
import Constants, { api, logo } from "../Component/Constants/Constants";
import axios from "axios";
import ProviderNavigationBar from "../Component/ProviderNavigationBar";
import ProivderList from "../Component/ProviderList";
import AddProviderForm from "../Component/AddProviderForm";
import DeleteProvider from "../Component/DeleteProvider";
import '../Styles/Styles.css'

export default function HospitalView()
{
    const [hospital, setHospital]= useState({})
    const [id, setId]=useState(1)

    useEffect(()=>{axios.get(api)
        .then(res=>{
            setHospital(res.data)
        })
        .catch(err=>{console.log(err)}
        )
        
},[])

// const mystyle = {
//     display: "flex",
//     align-items: "center"
//   };
    return(
        <div>       
            <ProviderNavigationBar/>
            <div className="actions">
            <AddProviderForm/>
            </div>
            <ProivderList/>
     

        </div>
    )
}