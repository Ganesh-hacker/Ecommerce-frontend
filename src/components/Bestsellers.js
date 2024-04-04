import React from "react";
import "./bestseller.css";
import Avantra from './Avantra.jpg';
import gucci from './gucci.jpg';
import levis from './levis.png';
export default function Bestsellers(){
 return(
    <div className="fContainers" style={{marginRight: 'auto', marginLeft: 'auto', width: 'fit-content', height:'350px'}}>
    <div className="flip-cards">
        <div className="flip-cards-inners">
            <div className="flip-cards-fronts">
                <img src={Avantra} alt="Best Prices & Offers" />
            </div>
            <div className="flip-cards-backs" >
                  <p>-Be class of Elegence</p>
            </div>
        </div>
    </div>
    <div className="flip-cards">
        <div className="flip-cards-inners">
            <div className="flip-cards-fronts">
                <img src={gucci} alt="Satisfaction Guarantee" />
            </div>
            <div className="flip-cards-backs">
                <p>-Be rich with gucci</p>
            </div>
        </div>
    </div>
    <div className="flip-cards">
        <div className="flip-cards-inners">
            <div className="flip-cards-fronts">
                <img src={levis} alt="Delivery Service" />
            </div>
            <div className="flip-cards-backs">
            <p>-“Live in Levi's”</p> 
            </div>
        </div>
    </div>
</div>
 );
}