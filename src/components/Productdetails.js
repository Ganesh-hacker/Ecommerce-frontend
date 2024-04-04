import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../index.css";



export default function Productdetails() {
  const [backenddata, setBackendData] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation(); 
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        const params = new URLSearchParams(location.search); 
        const id = params.get('id');

        fetch(`${backendurl}/v1/dresses/${id}`) 
            .then(response => response.json())
            .then(data => setBackendData(data))
            .catch(error => {
                setError(error);
                console.error('Error fetching data:', error);
            });
    }, [location.search]);
    const username=localStorage.getItem("username");
    async function handlecart(event){
      event.preventDefault();
      try {
          const response = await fetch(`${backendurl}/addingtocart/${backenddata.id}`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ ...backenddata, name: username }),
          });

          if (response.ok) {
              window.location.href = '/cart';
          } else {
              window.location.href = '/cart';
          }
      } catch (error) {
          console.error('Error registering:', error);
      }
    }
    // async function handlepurch(event){
    //     event.preventDefault();
    //     try {
    //         const response = await fetch(`/addingtopurch/${backenddata.id}`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ ...backenddata, name: username }),
    //         });
  
    //         if (response.ok) {
    //             window.location.href = '/address';
    //         } else {
    //             window.location.href = '/address';
    //         }
    //     } catch (error) {
    //         console.error('Error registering:', error);
    //     }
    //   }
    
    function setlocalprice(){
        localStorage.setItem("productprice",backenddata.discountedPrice)
    }
    return (
        <div className="productbox">
            <h4 >{backenddata.topLavelCategory}/{backenddata.secondLavelCategory}/{backenddata.thirdLavelCategory}</h4><br/>
          <img src={backenddata.imageUrl}/>
          <div className="detailsbox">
            <h4 className="brands">  {backenddata.brand}</h4>
            <h4></h4>
            <p className="product-price">₹{backenddata.price}</p>
            <p className="product-price"><h3>{backenddata.discountedPrice}</h3></p>
            <p className="product-price">{backenddata.discountPersent}%off</p>
            <div className="select-size">
                        <select name="size">
                            <option value="s">Size: S</option>
                            <option value="m">Size: M</option>
                            <option value="l">Size: L</option>
                            <option value="xl">Size: XL</option>
                            <option value="xxl">Size: XXL</option>
                        </select>
            </div>
            <div className="rating">
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "fas fa-star"></i></span>
                <span><i className = "far fa-star"></i></span>
             </div>
            <div className="product-btns">
             { username &&  <div><Link  to={`/address/${backenddata.id}`}><button type="button" className="btn-buy" onClick={setlocalprice}  > buy now
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button></Link>
      
               <button type="button" className="btn-buy" onClick={handlecart} > Add to cart
                    <span><i className = "fas fa-cart-plus"></i></span>
                 </button> </div>}
                 { !username &&  <div><Link  to={`/login`}><button type="button" className="btn-buy" > buy now
                    <span><i className = "fas fa-shopping-cart"></i></span>
                </button></Link>
      
                <Link  to={`/login`}>   <button type="button"  className="btn-buy"  > Add to cart
                    <span><i className = "fas fa-cart-plus"></i></span>
                 </button></Link></div>}
            </div>
            <div className="flexingbox">
              <h5 className="fas fa-tag"> </h5> <h5> A traditional garment embodying elegance and grace.</h5>
              <h5 className="fas fa-tag"></h5><h5>Crafted from fine fabrics, it features intricate embroidery and a relaxed fit.</h5>
              <h5 className="fas fa-tag"></h5><h5> Providing comfort and style.</h5>
            </div>
                         
          </div>
        </div>
    )
}