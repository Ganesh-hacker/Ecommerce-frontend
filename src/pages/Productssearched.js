import React, { useEffect, useState } from "react";
import "../index.css";
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Products from "../components/Products";
import Bestsellers from "../components/Bestsellers";
import Endofprod from "../components/Endofprod";
import Footer from "../components/Footer";

export default function Productssearched(){
    const [backenddata, setBackendData] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation(); 
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        const params = new URLSearchParams(location.search); 
        const search = params.get('search');
        console.log("search", search);

        fetch(`${backendurl}/v1/dresses/query?search=${search}`) 
            .then(response => response.json())
            .then(data => setBackendData(data))
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [location.search]); 

    const searchobj = backenddata ? backenddata.map(Data => (
        <Products key={Data.id} {...Data} />
    )) :console.log("no items");
    return(
        <div>
         <Header />
         <div className="heads">Search results</div>
         <div class="products">
         {searchobj}
         </div>
         <div className="heads">Best Sellers</div>
         <Bestsellers /> 
         <Endofprod />
         <Footer />
      
</div>    )
}