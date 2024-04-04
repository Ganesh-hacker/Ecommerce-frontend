import React from "react";
import AboutUsBanner from './AboutUsBanner.jpg';
import bestPriceIcon from './bestPriceIcon.png';
import DeliveryService from './DeliveryService.png';
import satisfy from './satisfy.png';
import './AboutUs.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutUs() {
    return (
        <div>
            <Header />
        <div className="aboutUsContentContainer aboutUsContent">
            <div className="aboutUsBanner" style={{textAlign: 'center', position: 'relative'}}>
                <img className="img-sz" src={AboutUsBanner} style={{height: '200px', width: '100%'}} alt="About Us Banner" />
                <div className="head-sz" style={{fontWeight: 'bold', fontSize: '50px', color: 'black', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textShadow: '2px 2px rgb(67, 67, 163)'}}>
                    About Us
                </div>
            </div>
            <h1 className="fadeIn mid-sz" style={{textAlign: 'center'}}>--Who We Are and What We Do--</h1>
            <div className="aboutDesc fadeIn mid1-sz">VSavvy is an E-commerce company that started in 2024. VSavvy is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We strive to have a positive impact on customers, employees, small businesses, the economy, and the communities where we’re located.  
            </div>
            <div className="w3-container w3-center DescContainerLeft" id="slideLeft" style={{marginRight: 'auto', marginLeft: 'auto', width: 'fit-content'}}>
                <div className="DescBoxLeft mid2-sz">VSavvy Cares</div>
                <p className="mid3-sz" style={{textAlign: 'center', marginTop: '50px', color: 'rgb(128, 128, 128)'}}>VSavvy is a smart, passionate builder with different backgrounds and goals, who share a common desire to always be learning and inventing on behalf of our customers. We believe that if you’re not left with an amazing experience, we haven’t done our job. We don’t measure success through achievements or awards, but through the satisfaction of our customers.</p>
            </div>
            <div className="w3-container w3-center DescContainerRight" id="slideRight" style={{marginRight: 'auto', marginLeft: 'auto', width: 'fit-content'}}>
                <div className="DescBoxRight mid2-sz">Why Choose Us</div>
                <p className="mid3-sz" style={{textAlign: 'center', marginTop: '50px', color: 'rgb(128, 128, 128)'}}>In VSavvy, there is a wide range of options in the category, exclusively handpicked to help you find the best quality with the lowest prices. No more getting stuck in traffic jams, the order will be delivered right to your doorstep. We guarantee on-time delivery and the best quality! Shopping online is now easy as every product on your shopping list is available at VSavvy.com</p>
            </div>
            <h2 className="mid4-sz" style={{textAlign: 'center'}}>--What We Provide--</h2>
            <div className="flip-card-Container" style={{marginRight: 'auto', marginLeft: 'auto', width: 'fit-content', height:'350px'}}>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={bestPriceIcon} alt="Best Prices & Offers" />
                            <p>Best Prices & Offers</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Best Prices & Offers</h2> 
                            <p>We provide the best value for money. We also specials on every weekend and special occasions. You can get the best quality products at the lowest prices at VSavvy.com</p> 
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={satisfy} alt="Satisfaction Guarantee" />
                            <p>Satisfaction Guarantee</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Satisfaction Guarantee</h2> 
                            <p>If you are not satisfied with any of our products for a valid reason, we will be more than happy to refund/replace those products for you (terms and conditions applied).</p> 
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={DeliveryService} alt="Delivery Service" />
                            <p>Delivery Service</p>
                        </div>
                        <div className="flip-card-back">
                            <h2>Delivery Service</h2> 
                            <br></br>
                            <p>We also deliver multiple days a week in most areas. No more stucking in the traffic jams! The products will be delivered to your doorsteps</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
        
    );
}
