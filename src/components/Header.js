import React from "react";
import "../index.css";
import logoimg from "../images/logo.png"
export default function Header(props){
    const [searchdetails,setsearch]=React.useState({search: ""})
    function handlechange(event){
        const {value,name}=event.target
        setsearch(prevsearch=>{
            return {...prevsearch,
            [name]:value
        }})
    }
    const username=localStorage.getItem('username')
    function Loggingout() {
        localStorage.removeItem('username');
    }
    return(
        <div className="menu-bar">
      <a href="/"> <img className="logo" src={logoimg}  /></a> 
      <form action="/searchproducts">
                <div className="search">
                    <span className="searchicon material-symbols-outlined">search</span>
                <input className="searchinput" type="search" value={searchdetails.search} name="search" onChange={handlechange} placeholder="Search"></input>
                </div></form>
        <ul>
            
            <li><a href="/">Home</a></li>
            <li><a >Men <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="/searchproducts?search=men+shirt">Shirts</a></li>
                        <li><a href="/searchproducts?search=men+jeans">Pants</a></li>
                        <li><a href="/searchproducts?search=men%2Bkurta">Kurtas</a></li>
                    </ul>
                </div>
            </li>
            <li><a >Women <i class="fas fa-caret-down"></i></a>
                <div class="dropdown-menu">
                    <ul>
                        <li><a href="/women/kurta">Kurtis</a></li>
                        <li><a href="/searchproducts?search=women+top">Tops</a></li>
                       
                        <li><a href="/searchproducts?search=women+jeans">Jeans</a></li>
                    </ul>
                </div>
            </li>
            {username ? (
   <li>  <a href="/profile" style={{ color: 'white' }}>{username}<i class="fas fa-caret-down"></i></a>
   <div class="dropdown-menu">
                    <ul>
                    <li><a href="/profile" >Profile</a></li>
                    <li><a href="/Recentorders" >Orders</a></li>
                    <li><a href="/" onClick={Loggingout}>Logout</a></li>
                        
                    </ul>
                </div> </li>
) : (
    <li>
        <a href="/login"
        >Login/Signup
        </a>
    </li>
)}
{username  && <li><a href="/cart"><i className="fas fa-shopping-cart"></i></a></li>}
    
           
        </ul>
    </div>
    )
}