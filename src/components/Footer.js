import React from "react";
import "../index.css";
export default function Footer(){
    return(
        <footer>
         <div class="fcontainer">
      <div class="row">
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a class="footerlink" href="/aboutus">About us</a></li>
            <li><a class="footerlink" href="/Terms & Conditions">Terms & Conditions</a></li>
            <li><a class="footerlink" href="/Privacy">Privacy policy</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Help Center</h4>
          <ul>
            <li><a class="footerlink" href="/Helpcenter">FAQ</a></li>
            <li><a class="footerlink" href="#">Status</a></li>
            <li><a class="footerlink" href="./ContactUs">Contact Us</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Account</h4>
          <ul>
            <li><a class="footerlink" href="/Recentorders">Orders</a></li>
            <li><a class="footerlink" href="/cart">Cart</a></li>
           
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a class="footerlink" href="https://revanthrawi.github.io/Musicclub/artists/Main.html#"><i class="fab fa-facebook-f"></i></a>
            <a class="footerlink" href="https://revanthrawi.github.io/Musicclub/artists/Main.html#"><i class="fab fa-twitter"></i></a>
            <a class="footerlink" href="https://revanthrawi.github.io/Musicclub/artists/Main.html#"><i class="fab fa-instagram"></i></a>
            <a class="footerlink" href="https://revanthrawi.github.io/Musicclub/artists/Main.html#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
    </footer>
    )
}