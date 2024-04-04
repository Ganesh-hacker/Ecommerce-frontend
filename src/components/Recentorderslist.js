import { Link } from "react-router-dom";
import "./Wishlist.css";
import React, { useEffect, useState } from "react";

export default function Recentorderslist(props) {
    const [backenddata, setBackendData] = useState([]);
    const [error, setError] = useState(null);
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        fetch(`${backendurl}/v1/dresses/${props.id}`) 
            .then(response => response.json())
            .then(data => setBackendData(data))
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, []);

  


    return (
        <div className="row">
            <div className="wishlist-item col-12 d-flex p-0">
                <div className="item-img"><a href={`product?id=${props.id}`}><img src={props.imageUrl} alt="cat 12" /></a></div>
                <div className="item-detail">
                    <div><h6>{props.title}</h6></div>
                    <div className="item-rating">
                        <ul>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="fas fa-star"></i></li>
                            <li><i className="far fa-star"></i></li>
                        </ul>
                    </div>
                    <div className="price-discount">
                        <span>Rs {props.discountedPrice}</span>
                        <span>Rs {props.price}</span>
                        <span> ({props.discountPersent}% Off)</span>
                    </div>
                    <div className="select-size">
                        <select name="size">
                            <option value="s">Size: S</option>
                            <option value="m">Size: M</option>
                            <option value="l">Size: L</option>
                            <option value="xl">Size: XL</option>
                            <option value="xxl">Size: XXL</option>
                        </select>
                        <div className="addcart-removewishlist">
                        {props.stage===4 && <div>  
                        <span><button className="addcart-btn">Delivered</button></span>
                        <span><Link to={`/ProductRating/${props.id}`}><button className="addcart-btn">Review</button></Link></span>
                        </div> }
                       {props.stage!=4 && <span><Link to={`/track/${props.id}`}><button className="addcart-btn">Track</button></Link></span>}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
