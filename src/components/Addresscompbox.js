import React, { useEffect, useState } from "react";
import "../pages/addresspage.css";
export default function Addresscompbox(props){
    const backendurl="https://backend-3p4d.onrender.com"
    const deleteaddress = async () => {
        try {
            const response = await fetch(`${backendurl}/address/${props._id}/${localStorage.getItem('username')}`, {
                method: "DELETE",
            });
            if (response.ok) {
                window.location.href = `/address/${props.prod_id}`;;
            } else {
                console.error("Error deleting item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };
    function handleaddress(event) {
        localStorage.setItem("addressid", props._id);
       
        console.log("Address ID:", localStorage.getItem("addressid"));
    
    }
    
    
    
    return(
<div className="addressdetails">
                            <input type="radio" id="address1" name="deliveryAddress" onClick={() => { handleaddress(); props.toggle(); }} />
                            <h4>{props.name}</h4>
                            <p>{props.address},{props.locality}- {props.city}</p>
                            <p>{props.city}, {props.state} - {props.pincode}</p>
                            <p>Mobile: {props.mobileno}</p>
                            <button className="delete-address" onClick={deleteaddress}>Delete Address</button>
                        </div>
    )
}