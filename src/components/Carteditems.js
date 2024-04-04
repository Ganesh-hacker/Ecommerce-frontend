import "../components/Carts.css";
import React, { useEffect, useState } from "react";

export default function Carteditems(props) {
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
            const response = await fetch(`${backendurl}/cart/${props.id}/${localStorage.getItem('username')}`, {
                method: "DELETE",
            });
            if (response.ok) {
                window.location.href = "/cart";
            } else {
                console.error("Error deleting item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

   const handleWish = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(`${backendurl}/wishlist/${props.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...backenddata, name: localStorage.getItem('username') }),
        });

        if (response.ok) {
            window.location.href = '/Wishlist'; 
        } else {
            window.location.href = '/Wishlist';
            console.error('Error moving item to wishlist:', response.statusText);
        }
    } catch (error) {
        console.error('Error moving item to wishlist:', error.message);
    }
};

    return (
        <div className="col-lg-8 col-13 cart-padding">
            <div className="row">
                <div className="col-13 cart-box-mb" id="wrap-cart">
                    <div className="col-13 cart-box-mb">
                        <div className="cart-box d-flex flex-md-row flex-column justify-content-between">
                            <div className="cart-img">
                            <a href={`product?id=${props.id}`}> <img src={props.imageUrl} alt="cat 2" /></a>
                            </div>
                            <div className="about-product">
                                <h6 className="mb-2">{props.title}</h6>
                                <p className="card-text mb-1 text-muted">Color: {props.color}</p>
                                <p className="card-text mb-1 text-muted">Sold By: {props.brand}</p>
                                <div className="d-flex flex-row select-size-qty">
                                    <div className="select-size">
                                        <select name="size">
                                            <option value="s">Size: S</option>
                                            <option value="m">Size: M</option>
                                            <option value="l">Size: L</option>
                                            <option value="xl">Size: XL</option>
                                            <option value="xxl">Size: XXL</option>
                                        </select>
                                    </div>
                                    {/* Add increment/decrement functionality */}
                                </div>
                            </div>
                            <div className="product-cost-delivery">
                                <div className="price-after-discount">Rs {props.discountedPrice}</div>
                                <div className="product-price">
                                    <span> Rs {props.price}</span>
                                    <span> {props.discountPersent}% off</span>
                                </div>
                                <div><span>Delivery in 4 - 6 days</span></div>
                            </div>
                        </div>
                        <div className="product-remove-wishlist">
                            <span onClick={handleDelete}>Remove</span><span>|</span><span onClick={handleWish}>Move To Wishlist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
