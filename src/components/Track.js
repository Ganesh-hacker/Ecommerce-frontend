import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { useParams,Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Tracksymbol from "./Tracksymbols";
import '../track.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Track(){
  const [backenddata, setBackendData] = useState([]);
  const [backendaddressdata, setBackendAddressData] = useState([]);
    const [error, setError] = useState(null);
    const backendurl="https://backend-3p4d.onrender.com"
    const { id } = useParams();
    useEffect(() => {
      fetch(`${backendurl}/v1/addingtopurch/${localStorage.getItem("username")}/${id}`)
        .then(response => response.json())
        .then(data => {
          setBackendData(data);
          return fetch(`${backendurl}/v1/address/${data.address_id}`);
        })
        .then(response => response.json())
        .then(addressData => {
          // If addressData is an array with a single object, extract that object
          const addressObject = Array.isArray(addressData) && addressData.length > 0 ? addressData[0] : {};
          setBackendAddressData(addressObject);
        })
        .catch(error => {
          setError(error);
          console.error('Error fetching data:', error);
        });
    }, [id]);
  
    if (Object.keys(backenddata).length === 0 || Object.keys(backendaddressdata).length === 0) {
      return <div>Loading...</div>; // Handle loading state
    }
    console.log("back:",backenddata)
    console.log("addressdata",backendaddressdata)
    return (
      <div className="trackflexbox">
      <div>   <img className="trackboximg" src={backenddata.imageUrl}/>
            <p style={{width:"250px", margin:"10px 10px 0px 30px", alignItem:"center", fontWeight:"bold",opacity:"0.8"}} >{backenddata.title}</p>
        </div>
      <div className="main_container">    
      <div className="asinglebox  ">
        <div class="container padding-bottom-3x mb-1">
        <div class="card mb-3">
          <div class="p-4 text-center text-white text-lg bg-dark rounded-top"><span class="text-uppercase">Tracking Order No - </span><span class="text-medium">{backenddata.id}</span></div>
          <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-secondary">
            <div class="w-100 text-center py-1 px-2"><span class="text-medium">Shipped Via:</span>Ground</div>
            <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status:</span>Processing Order</div>
            <div class="w-100 text-center py-1 px-2"><span class="text-medium">Expected Date:</span> feb 14, 2024</div>
          </div>
          <div class="card-body">
           
              <Tracksymbol 
              stage={backenddata.stage}/>
           
          </div>
        </div>
        <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
          <div class="custom-control custom-checkbox mr-3">
            <input class="custom-control-input" type="checkbox" id="notify_me"    />
            <label class="custom-control-label" for="notify_me">Notify me when order is delivered</label>
          </div>
        </div>
      </div>

      </div>
      </div>
      <div>   
           <div style={{border:"1px solid black",borderRadius:"10px",padding:"10px",marginBottom:"20px",fontFamily:"sans-serif", marginLeft:"50px"}}>
            <p style={{fontWeight:"bold",textDecoration:"underline"}}>BILLING ADDRESS</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", fontWeight:"bold",fontFamily:"sans-serif"}} >VSavvy</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", opacity:"0.8",fontFamily:"sans-serif"}} >MRpalli Pin Code - ******</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", opacity:"0.8",fontFamily:"sans-serif"}} >Tirupati ,Telephone No.	0*********</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center",opacity:"0.8",fontFamily:"sans-serif"}} >Andhra padesh</p>
            </div>
            <div style={{border:"1px solid black",borderRadius:"10px",padding:"10px",fontFamily:"sans-serif", marginLeft:"50px"}}>
            <p style={{fontWeight:"bold",textDecoration:"underline"}}>TO ADDRESS</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", fontWeight:"bold",fontFamily:"sans-serif" }} >{backendaddressdata.name}</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", opacity:"0.8",fontFamily:"sans-serif"}} >{backendaddressdata.mobileno}</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", opacity:"0.8",fontFamily:"sans-serif"}} >{backendaddressdata.address},{backendaddressdata.locality}</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center", opacity:"0.8",fontFamily:"sans-serif"}} >{backendaddressdata.city}-{backendaddressdata.pincode}</p>
            <p style={{width:"250px", margin:"0px 10px 0px 0px", alignItem:"center",  opacity:"0.8",fontFamily:"sans-serif"}} >{backendaddressdata.state}</p>
            </div>
        </div>
      </div>
    );
  }

