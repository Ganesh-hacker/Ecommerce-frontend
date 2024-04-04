import React from "react";
import "./ContactUs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactUs(){
    return(
     <div>
        <Header />
    <div className="Wbody">
    <section>
    <div class="section-header">
      <div class="container">
        <h2>Contact Us</h2>
        <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.</p>
      </div>
    </div>
    
    <div class="container">
      <div class="rows">
        
        <div class="contact-info">
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-home"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Address</h4>
              <p>Gangaaram Technologies<br/>kapiltheertham, Tirupati <br/>517502</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-phone"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Phone</h4>
              <p>671-423-2781</p>
            </div>
          </div>
          
          <div class="contact-info-item">
            <div class="contact-info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            
            <div class="contact-info-content">
              <h4>Email</h4>
             <p>Gangaaramtechnologies9@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div class="contact-form">
          <form action="" id="contact-form">
            <h2>Send Message</h2>
            <div class="input-box">
              <input type="text" required="true" name=""></input>
              <span>Full Name</span>
            </div>
            
            <div class="input-box">
              <input type="email" required="true" name=""></input>
              <span>Email</span>
            </div>
            
            <div class="input-box">
              <textarea required="true" name=""></textarea>
              <span>Type your Message...</span>
            </div>
            
            <div class="input-box">
              <input type="submit" value="Send" name=""></input>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  </div>
    <Footer/>
  </div>
    );
}