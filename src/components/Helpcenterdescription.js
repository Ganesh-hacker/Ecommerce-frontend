import React, { useEffect, useState } from "react";
import '../index.css';
import orderplacing from "../images/placingorderimg.jpg"
import { useLocation } from 'react-router-dom';
export default function Helpcenterdescription(){
    const [backenddata, setBackendData] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation(); 
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        const params = new URLSearchParams(location.search); 
        const id = params.get('id');
        console.log("id", id);

        fetch(`${backendurl}/v1/query/${id}`) // Correct URL pattern with dynamic ID
            .then(response => response.json())
            .then(data => setBackendData(data))
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [location.search]);
    return(
        <div>
           <div className="helpcenterinfobox1">
            <div className="flexrowhelpcenterinfo1">
                <div className="flexcolhelpcenterinfo1">
                <h1 style={{fontSize:'13px',paddingBottom:'10px'}}>Home / {backenddata.heading}</h1>
                <p style={{fontSize:'15px',fontWeight:'bold',color:'black',opacity:'0.7'}}>How-to . Customer</p>
                    <div>
                    <p style={{fontSize:'28px',fontWeight:'bolder',color:'black'}}>{backenddata.heading}</p>
                    <img style={{height:'500px', width:'500px'}} src={orderplacing}/>
                     <p style={{color:'#595959',letterSpacing:'normal',cursor:'pointer'}}> {backenddata.info} </p>
                    </div>
                </div>
                
                <div>
                     <p style={{fontSize:'22px',fontWeight:'bold' }}>Need to get in touch?</p>
                     <p style={{color:'#595959',letterSpacing:'normal'}}>We’ll start with some questions and get you to the right place.</p>
                     <div style={{margin:'16px 16px 16px 0px'}}>
                        <a href="#" className="helpcentercontactus">Contact us</a>
                     </div>
                     <p style={{color:'#595959',letterSpacing:'normal'}}>You can also <a  href="#" style={{fontSize:'16px', textDecoration:'underline' ,color:'black'}}> give us feedback.</a></p>
                </div>
            </div>
           </div>
        </div>
    )
}