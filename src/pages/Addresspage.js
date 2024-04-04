import React from "react";
import Addresscomp from "../components/Addresscomp";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function Addresspage() {
   function Handlebutton1(){
    document.querySelector(".popup").style.display='flex';
   }
   function Handlebutton2(){
    document.querySelector(".popup").style.display='none';
   }
    return (
        <div>
            <Header />
           <Addresscomp />
            <Footer/>
</div>
 )

}