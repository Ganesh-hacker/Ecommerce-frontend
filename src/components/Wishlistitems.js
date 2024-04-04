import "./Wishlist.css";
import React, { useEffect, useState } from "react";

export default function Wishlistitems(props) {
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

    const handleDelete = async () => {
        try {
            const response = await fetch(`${backendurl}/wishlist/${props.id}/${localStorage.getItem('username')}`, {
                method: "DELETE",
            });
            if (response.ok) {
                window.location.href = "/wishlist";
            } else {
                console.error("Error deleting item:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleCart = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${backendurl}/addingtocart/${props.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...backenddata, name: localStorage.getItem('username') }),
            });

            if (!response.ok) {
                window.location.href = "/cart";
                console.error('Error adding item to cart:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding item to cart:', error.message);
        }
    };

    return (
        <div className="row">
            <div className="wishlist-item col-12 d-flex p-0">
                <div className="item-img"><a href={`product?id=${props.id}`}><img src={props.imageUrl} alt="cat 12" /></a> </div>
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
                    </div>
                    <div className="addcart-removewishlist">
                        <span><button className="addcart-btn" onClick={handleCart}>Add to Cart</button></span>
                        <span>|</span>
                        <span onClick={handleDelete}>Remove from wishlist</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
