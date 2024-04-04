import React, { useEffect, useState } from "react";
import Wishlistitems from "./Wishlistitems";
import { useLocation } from "react-router-dom";
import "../components/Wishlist.css"
export default function Wishlist() {
    const username = localStorage.getItem("username");
    const [wilshlistitems, setwishlistItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [error, setError] = useState(null);
    const location = useLocation();
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        fetch(`${backendurl}/v1/wishlist/${username}`)
            .then(response => response.json())
            .then(data => {
                setwishlistItems(data);
                calculateTotalPrice(data); 
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [username]);

    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.discountedPrice; 
        });
        setTotalPrice(total);
    };

    const wishlistItemsComponents = wilshlistitems.map(item => (
        <Wishlistitems key={item.id} {...item} />
    ));
    return (
        <div class="container-xl">
            <div class="row">
                <div class="col-md-3  padding-none">
                    <div class="side-navigation d-flex flex-md-column flex-row justify-content-between">
                        <div class="my-account">
                            <h5>MY ACCOUNT</h5>
                                <div class="d-flex flex-column">
                                    <span>sai</span>
                                    <span>saibavesh5559@gmail.com</span>
                                </div>
                        </div>
                        <div class="wishlist-payment d-flex flex-column">
                            <h5>ORDERS</h5>
                            <a href="./my_orders.html">My Order</a>
                            <a href="./track_order.html">Track Order</a>
                          
                        </div>
                        <div class="account d-flex flex-column">
                            <nav class="nav flex-column" id="nav-tab" role="tablist">
                                <h5>ACCOUNT</h5>
                                <a class="nav-link" href="./my_profile.html" role="tab">Profile</a>
                                <a class="nav-link" href="./edit_profile.html" role="tab">Saved Addresses</a>
                                <a class="nav-link active" href="./my_wishlist.html" role="tab">Wishlist</a>
                            </nav>
                        </div>
                        <div class="wishlist-payment d-flex flex-column">
                            <h5>PAYMENT</h5>
                            <a href="./checkout.html">Phonepe</a>
                            <a href="./checkout.html">Debit Card</a>
                            <a href="./checkout.html">Credit Card</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-9 col-12 padding-none">
                    <div class="wishlist-body-top d-flex align-items-center justify-content-between">
                        <div class="wishlist-body-top-heading d-flex">
                            <div class="d-flex align-items-center">
                                <span>My Wishlist</span><span>(<div class="d-inline-block"
                                    id="numberOfWishlisItems"></div> Items)</span>
                            </div>
                            <div class="d-flex align-items-center"><i class="fas fa-heart"></i> <span>Recently
                                Added</span></div>
                        </div>

                       
                    </div>
                    <div id="wrapWishlist">
                        {wishlistItemsComponents}
                    </div>
                </div>
            </div>
        </div>

    );
}
