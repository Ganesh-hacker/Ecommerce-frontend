import React from 'react';
import "../components/Coupon.css";
import logoimg from "../images/logo.png"
export default function Coupon() {
    return (
        <div class="container-fluid">
            <div class="card-box">
                <a href="./#"> <img className="logo" src={logoimg}></img></a>

                <div class="thankyou-area">
                    <h1>THANK YOU</h1>
                    <p>FOR PURCHASING FROM US</p>
                </div>

                <div class="discount-area">
                    <div class="legend-top">ENJOY</div>
                    <h1>15% OFF</h1>
                    <div class="legend-bottom">ON YOUR NEXT ORDER</div>
                </div>

                <div class="coupon-area">
                    <p>Use Coupon Code: G344rgy1RFS</p>
                    <p>Limit one per customer</p>
                </div>
            </div>
        </div>
    );
}