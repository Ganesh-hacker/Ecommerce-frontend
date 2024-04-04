import React from 'react';
import '../payment.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useParams,Route } from "react-router-dom";

function Payment() {
  const { id } = useParams();
  const [backenddata, setBackendData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const backendurl="https://backend-3p4d.onrender.com"
 React.useEffect(() => {
      fetch(`${backendurl}/v1/dresses/${id}`) 
          .then(response => response.json())
          .then(data => setBackendData(data))
          .catch(error => {
              setError(error);
              console.error('Error fetching data:', error);
          });
  }, []);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [paymethod,setpaymethod]=React.useState("")
  function handleclicked(event){
    setpaymethod(()=>event.target.value)
  }
  const onSubmit = (data) => {
    navigate('/paymentsuccess');
  };
  async function handlepurch(event){
    event.preventDefault();
    const username=localStorage.getItem('username')
    const D= new Date()
    console.log(D)
    try {
        const response = await fetch(`${backendurl}/addingtopurch/${backenddata.id}/${D}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...backenddata, name: username ,address_id:localStorage.getItem("addressid")}),
        });

        if (response.ok) {
            window.location.href = '/paymentsuccess';
        } else {
            window.location.href = '/paymentsuccess';
        }
    } catch (error) {
        console.error('Error registering:', error);
    }
  }
  
   
    return (
      <div className="maincontainer">
        <div class="container">
          <div class="py-5 text-center">
            
            <h2>Checkout</h2>
            <p class="lead"></p>
          </div>

          <div class="row">
            <div class="col-md-4 order-md-2 mb-4">
              <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">Price details</span>
               
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Total MRP</h6>
                  
                  </div>
                  <span class="text-muted">{parseInt(localStorage.getItem("productprice"), 10)+500}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Discount on MRP</h6>
                  
                  </div>
                  <span class="text-muted">{parseInt(localStorage.getItem("productprice"), 10)}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Platform fee</h6>
                  
                  </div>
                  <span class="text-muted">20</span>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-light">
                  <div class="text-success">
                    <h6 class="my-0">Promo code</h6>
                    <small></small>
                  </div>
                  <span class="text-success">---</span>
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>{parseInt(localStorage.getItem("productprice"), 10)+20}</strong>
                </li>
              </ul>

              <form class="card p-2">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Promo code"/>
                  <div class="input-group-append">
                    <button type="button" class="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-md-8 order-md-1">
            <h4 class="mb-3">Billing address</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
             
                

                <h4 class="mb-3">Payment</h4>

                <div class="d-block my-3">
                  <div class="custom-control custom-radio">
                    <input id="credit" value = "credit" name="paymentMethod" type="radio" onClick={handleclicked} class="custom-control-input"  required />
                    <label class="custom-control-label" for="credit">Credit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="debit" value = "debit" name="paymentMethod" type="radio" class="custom-control-input" onClick={handleclicked} required />
                    <label class="custom-control-label" for="debit">Debit card</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="UPI" value = "UPI" name="paymentMethod" type="radio" class="custom-control-input" onClick={handleclicked} required />
                    <label class="custom-control-label" for="debit">UPI</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input id="UPI" value = "COD" name="paymentMethod" type="radio" onClick={handleclicked} class="custom-control-input"required />
                    <label class="custom-control-label" for="debit">Cash On Delivery</label>
                  </div>
                  
                </div>
              {paymethod==="credit" &&  <div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Credit card number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiry Date</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                </div>}
                {paymethod==="debit" &&  <div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">Name on card</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted">Full name as displayed on card</small>
                    <div class="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="cc-number">Debit number</label>
                    <input type="text" class="form-control" id="cc-number" placeholder="" required />
                    <div class="invalid-feedback">
                       Debit card number is required
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">Expiry Date</label>
                    <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                    <div class="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div class="col-md-3 mb-3">
                    <label for="cc-expiration">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                    <div class="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />
                </div>
                }
                 {paymethod==="UPI" &&  <div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="cc-name">UPI Id</label>
                    <input type="text" class="form-control" id="cc-name" placeholder="" required />
                    <small class="text-muted"></small>
                    <div class="invalid-feedback">
                    UPI Id is required
                    </div>
                  </div>
                  
                </div>
                <hr class="mb-4" />
                </div>
                }
                
              {paymethod&&  <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={handlepurch} >Pay</button>}
              {!paymethod&&  <button class="btn btn-primary btn-lg btn-block" type="submit">Select Payment Method</button>}
              </form>
              <br>
              </br>
            </div>
          </div>

          
        </div>
     
      </div>
      
)
}

export default Payment;