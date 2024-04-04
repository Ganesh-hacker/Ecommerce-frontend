import React from "react";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Products from "../../components/Products";
import kurtasPage from "../../Clothsinfo/Men/men_kurta";
import Bestsellers from "../../components/Bestsellers";
import Endofprod from "../../components/Endofprod";
import Footer from "../../components/Footer";
import "../../index.css";

export default function Men_Kurtas_catalog_page(){
    const kurtaobj=kurtasPage.map(Data => {
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
         <div className="heads">Men's Kurtas</div>
         <div class="products">
         {kurtaobj}
         </div>
         <div className="heads">Best Sellers</div>
         <Bestsellers /> 
         <Endofprod />
         <Footer />
      
</div>    )
}