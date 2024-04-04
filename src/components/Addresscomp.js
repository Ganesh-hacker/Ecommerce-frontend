import React, { useEffect, useState } from "react";
import { useLocation, useParams, Link } from 'react-router-dom';
import "../pages/addresspage.css";
import Addresscompbox from "./Addresscompbox";

export default function Addresscomp() {
    const { id } = useParams();
    const [addressdetails, setaddress] = useState({ name: "", mobileno: "", pincode: "", address: "", locality: "", city: "", state: "" });
    const [addressdata, setaddressdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const username = localStorage.getItem("username");
    const location = useLocation();
    const addressid=localStorage.getItem("addressid");
    const [togglevalue,settoggle]=useState(false);
    const backendurl="https://backend-3p4d.onrender.com"
    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`${backendurl}/address/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch address data');
                }
                return response.json();
            })
            .then(data => {
                setaddressdata(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
                console.error('Error fetching data:', error);
            });
    }, [username]);

    const addressdetailcomp = addressdata && addressdata.map(item => (
        <Addresscompbox key={item.id} {...item} prod_id={id} toggle={toggle} />
    ));

    const handleChange = (event) => {
        const { value, name } = event.target;
        setaddress(prevaddressdetails => ({
            ...prevaddressdetails,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = localStorage.getItem("username");
        try {
            const response = await fetch(`${backendurl}/address/${username}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...addressdetails, username: username }),
            });

            if (response.ok) {
                console.log("addressdetails:", addressdetails);
                window.location.href = `/address/${id}`;
            } else {
                window.location.href = `/address/${id}`;
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            window.location.href = '/address';
        }
    };

    const Handlebutton1 = () => {
        document.querySelector(".popup").style.display = 'flex';
    };

    const Handlebutton2 = () => {
        document.querySelector(".popup").style.display = 'none';
    };
   function toggle(){
   settoggle(true)
   }
    return (
        <div>
            <div className="totcontainer">
                <div>
                    <div className="headingflex">
                        <h1 style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>Select Delivery Address</h1>  
                     { username &&  <button id="button1" onClick={Handlebutton1}>Add new address</button>}
                  { !username && <a href='/login'> <button id="button1" >Login to continue</button></a>}
                    </div>
                    {addressdata !== undefined ? (
                        <div>
                            {addressdetailcomp}
                            {addressdata.length>=5 &&   <button className="add-new-address" onClick={Handlebutton1} id="button2">+ ADD NEW ADDRESS</button>}
                        </div>
                    ) : (
                        <div>
                            Add address
                        </div>
                    )}
                </div>
                <div>
                    <div className="delivery-estimates">
                        <h4>DELIVERY ESTIMATES</h4>
                        <p>Estimated delivery by 19 Mar 2024</p>
                        <h4>PRICE Details</h4>
                        <p>Total MRP Rs {localStorage.getItem("productprice")}</p>
                        <p>Platform fee Rs 20</p>
                        <p>Shipping fee FREE</p>
                        <hr />
                        <h4>Total amount Rs {parseInt(localStorage.getItem("productprice"), 10)+20}</h4>
                      {togglevalue &&  <Link to={`/payment/${id}`}><button className="add-new-address">Continue</button></Link>}
                      {!togglevalue && <button className="add-new-address">select address first</button>}

                    </div>
                </div>
            </div>

            <div className="popup">
                <div className="popup-content">
                    <img id="button3" onClick={Handlebutton2} src="data:image/png;base64,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" alt="close" className="close" />
                    <div className="delivery-estimates">
                        <h4>ADD NEW ADDRESS</h4><hr />
                        <form onSubmit={handleSubmit} method="POST">
                            <h4>Contact details</h4>
                            <input type="text" name="name" onChange={handleChange} value={addressdetails.name} className="addressinput" placeholder="Name*" required /><br />
                            <input type="text" name="mobileno" onChange={handleChange} value={addressdetails.mobileno} className="addressinput" placeholder="Mobile No*" required />
                            <h4>Address</h4>
                            <input type="text" name="pincode" onChange={handleChange} className="addressinput" value={addressdetails.pincode} placeholder="Pin Code*" required /><br />
                            <input type="text" name="address" onChange={handleChange} className="addressinput" value={addressdetails.address} placeholder="Door No*" required /><br />
                            <input type="text" name="locality" onChange={handleChange} className="addressinput" value={addressdetails.locality} placeholder="Locality*" required /><br />
                            <input type="text" name="city" onChange={handleChange} className="addressinput" value={addressdetails.city} placeholder="City*" required /><br />
                            <input type="text" name="state" onChange={handleChange} className="addressinput" value={addressdetails.state} placeholder="State*" required />

                         <button className="add-new-address" type="submit">ADD ADDRESS</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
