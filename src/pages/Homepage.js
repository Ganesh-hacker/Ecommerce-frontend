import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { useLocation } from 'react-router-dom';
import Products from "../components/Products";
import Bestsellers from "../components/Bestsellers";
import Footer from "../components/Footer";
import "../index.css";

export default function Homepage(){
    const [username, setUsername] = useState('');
    const location = useLocation(); 
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const name = searchParams.get('name');
        setUsername(name);
    }, [location.search]);
    const [backenddata, setBackendData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`${backendurl}/v1/dresses/random`) 
            .then(response => response.json())
            .then(data => setBackendData(data))
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [location.search]);
    const productobj=backenddata.map(Data => {
            return(
                 <Products 
                 {...Data}
                 />  
            )
        }
    )
    return(
        <div>
         <Header 
          name={username}/>
         <Slideshow />
         <div className="heads" >New Arrivals</div>
         <div class="products">
         {productobj}
         </div>
         <div className="heads">Best Sellers</div>
         <Bestsellers />
         <Footer />
      
</div>    )
}