import React from "react";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Products from "../../components/Products";
import wjeansPage from "../../Clothsinfo/Women/women_jeans.json";
import Bestsellers from "../../components/Bestsellers";
import Endofprod from "../../components/Endofprod";
import Footer from "../../components/Footer";
import "../../index.css";

export default function Women_jeans_catalog_page(){
    const kurtaobj=wjeansPage.map(Data => {
            return(
                 <Products 
                 {...Data}
                 />
                
            )
        }
    )
    return(
        <div>
         <Header />
         <div className="heads">Best Sellers</div>
         <Bestsellers /> 
         <div className="heads">Men's Jeans</div>
         <div class="products">
         {kurtaobj}
         </div>
         <Endofprod />
         <Footer />
      
</div>    )
}