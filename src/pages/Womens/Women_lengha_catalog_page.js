import React from "react";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Products from "../../components/Products";
import lenghaPage from "../../Clothsinfo/Women/LenghaCholi.js";
import Bestsellers from "../../components/Bestsellers";
import Endofprod from "../../components/Endofprod";
import Footer from "../../components/Footer";
import "../../index.css";

export default function Women_lengha_catalog_page(){
    const kurtaobj=lenghaPage.map(Data => {
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
         <div className="heads">Lehenga</div>
         <div class="products">
         {kurtaobj}
         </div>
         <Endofprod />
         <Footer />
      
</div>    )
}