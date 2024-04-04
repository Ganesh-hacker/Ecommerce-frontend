import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css"
export default function Products(props){
    const navigate = useNavigate();
    return(
        <div className="boxed">
            <div className="product-content">
                            <img className="product-img" src={props.imageUrl} />
                </div>

                    <div className="product-info">
                        <div className="product-info-top">
                            <h2 className="sm-title">{props.brand}</h2>
                            <div className="rating">
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "fas fa-star"></i></span>
                                <span><i className = "far fa-star"></i></span>
                            </div>
                        </div>
                        <p className="product-name">{props.title}</p>
                        <p className="product-price">₹{props.discountedPrice}</p>
                        <p className="product-price actualprice">₹{props.price}</p>
                        <p className="product-price1">{props.discountPersent}%off</p>
                    </div>
                    <div className="product-btns">
                         <Link to={`/product?id=${props.id}`}  > <button type="button" className="btn-buy" > View 
                                <span><i className = "fa fa-eye"></i></span>
                            </button></Link>
                        </div>

                    
                    
    </div>
        

    )
}