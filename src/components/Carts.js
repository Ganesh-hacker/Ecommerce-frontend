import React, { useEffect, useState } from "react";
import Carteditems from "./Carteditems";
import { useLocation } from "react-router-dom";
import "../components/Carts.css"
export default function Carts() {
    
    const username = localStorage.getItem("username");
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [error, setError] = useState(null);
    const location = useLocation(); 
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        fetch(`${backendurl}/v1/cart/${username}`)
            .then(response => response.json())
            .then(data => {
                setCartItems(data);
                calculateTotalPrice(data); 
            })
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [username]);

    // Function to calculate total price
    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.discountedPrice; 
        });
        setTotalPrice(total);
    };

    const cartItemsComponents = cartItems.map(item => (
        <Carteditems key={item.id} {...item} />
    ));
    return (
            <div>
{!username  ? (
     <h1 style={{color:"black",textAlign:"center",marginTop:'200px',marginBottom:"200px"}}>Please <a href="/login">LOGIN</a> to get access to your Cart</h1>
    ):(
    <main>
    <div class="profile-breadcrumb">
        <div class="container-xl">  
            <nav>
                <ol>
                    <li><a href="https://mdsaquibmdafzal.github.io/swag-of-india/my_carts.html">Carts</a></li>
                    <li><a href="https://mdsaquibmdafzal.github.io/swag-of-india/my_carts.html">My Carts</a></li>
                </ol>
            </nav>
        </div>
    </div>
    <div class="container-xl">
        <div class="row">
            <div class="col-lg-8 col-13 cart-padding">
                <div class="d-flex justify-content-between align-items-center mycart-top-div">
                    <div class="d-flex align-items-center mycart-top-heading">
                        <h4>MY CARTS</h4><span>(<span id="numberOfItems">1</span> ITEMS)</span>
                    </div>
                    <div class="mycart-top-total">
                        Total: Rs <span id="cartTotalPrice">{totalPrice.toFixed(2)} </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
          {cartItemsComponents}
            <div class="col-lg-4 col-13 cart-padding">
                <div class="coupon-box">
                    <div class="coupon-head">
                        <h5>coupons</h5>
                        <div class="apply-coupon"><span><i class="fas fa-tag"></i> Apply Coupons
                            </span><a href="https://mdsaquibmdafzal.github.io/swag-of-india/thankyou.html"><button>Apply</button></a></div>
                    </div>
                    <div class="coupon-body">
                        <div class="price-list">
                            <div class="pricelist-heading-left">Price Details</div>
                            <div class="pricelist-heading-right"></div>
                            <div class="price-details-left">Price Details</div>
                            <div class="price-details-right">Rs <span id="totalPrice">{totalPrice.toFixed(2)} </span></div>
                            <div class="bag-discount-left">Bag Discount</div>
                            <div class="bag-discount-right">Rs <span id="totalDiscount">1000</span></div>
                            <div class="coupon-discount-left">Coupon Discount</div>
                            <div class="coupon-discount-right">Apply Coupon</div>
                            <div class="order-toatal-left">Order Total</div>
                            <div class="order-toatal-right">Rs <span id="totalPriceAfterDiscount">1000</span></div>
                            <div class="delivery-charges-left">Delivery Charges</div>
                            <div class="delivery-charges-right"><span>Rs 99</span><span> Free</span></div>
                        </div>
                        <hr/>
                        <div class="coupon-footer">
                            <div class="price-total">
                                <div class="grid-item">Total</div>
                                <div class="grid-item">Rs <span id="finalTotal">{}</span></div>
                            </div>
                            <div class="placeorder-btn">
                                <a href="https://mdsaquibmdafzal.github.io/swag-of-india/checkout.html"><button>place order</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div> 
</main>)}
</div>
    );
}


