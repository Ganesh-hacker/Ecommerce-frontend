import React from "react";
import Header from "../../components/Header";
import Slideshow from "../../components/Slideshow";
import Products from "../../components/Products";
import kurtaPage from "../../Clothsinfo/Kurta/kurta";
import Bestsellers from "../../components/Bestsellers";
import Endofprod from "../../components/Endofprod";
import Footer from "../../components/Footer";
import "../../index.css";

export default function Product_catalog_women(){
    const kurtaobj=kurtaPage.map(Data => {
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
         <div className="heads">Women's Kurtis</div>
         <div class="products">
         {kurtaobj}
         </div>
         <Endofprod />
         <Footer />
      
</div>    )
}