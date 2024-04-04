import React from "react";
import "../index.css";
import fir from "../images/1.png"
import sec from "../images/2.png"
import thi from "../images/3.png"
import fou from "../images/4.png"
import fiv from "../images/5.png"

export default function Slideshow(){
    return (
        <div>
        <base href="" />
<div id="captioned-gallery">
    <figure className="slider">
        <figure>
            <img src={fir} />
        </figure>
        <figure>
            <img src={sec}/>
        </figure>
        <figure>
            <img src={thi} />
        </figure>
        <figure>
            <img src={fou} />
        </figure>
        <figure>
            <img src={fiv} />
        </figure>
    </figure>
</div>
</div>
    )
}