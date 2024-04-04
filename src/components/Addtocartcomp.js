import React from "react";
import Carteditems from "./Carteditems";

import { products,addProduct } from "../Clothsinfo/cartdata";
export default function Addtocartcomp(){

    return(
        <div className="cartbox">
          <div className="cartboxhead"> <h2>Shopping Cart</h2>
           <p><b>Items carted</b></p>
           </div>
           <div className="cartitemsinfo">
            <Carteditems {...products}/>
            <h3><b>Sub-total:-</b></h3>
           </div>
        </div>
    )
}