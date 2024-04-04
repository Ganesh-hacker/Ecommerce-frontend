/*  */import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Women_kurta_catalog_page from "./pages/Womens/Women_kurta_catalog_page";
import Men_Shirts_catalog_page from "./pages/Mens/Men_Shirts_catalog_page";
import Men_Kurtas_catalog_page from "./pages/Mens/Men_Kurtas_catalog_page";
import Men_Pants_catalog_page from "./pages/Mens/Men_Pants_catalog_page";
import Women_tops_catalog_page from "./pages/Womens/Women_tops_catalog_page";
import Women_jeans_catalog_page from "./pages/Womens/Women_jeans_catalog_page";
import Women_lengha_catalog_page from "./pages/Womens/Women_lengha_catalog_page";
import Profile from "./pages/Profile"
import Product from "./pages/Product"
import Addtocart from "./pages/Addtocart";
import Loginpage from "./pages/Loginpage";
import Registerationpage from "./pages/Registerationpage";
import Paymentpage from "./pages/Paymentpage";
import Trackpage from "./pages/Trackpage";
import PaymentImg from "./components/PaymentImg";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Privacy from "./pages/Privacypage";
import Helpcenter from "./pages/Helpcenterpage";
import Terms from "./pages/Termspage";
import ProductRatingReviewPage from "./pages/ProductRatingReviewPage";
import Cartspage from "./pages/Cartspage";
import Coupon from "./pages/Couponpage";
import Wishlist from "./pages/Wishlistpage";
import Mainhelpcenterpage from "./pages/Mainhelpcenterpage";
import Helpcenterinfopage from "./pages/Helpcenterinfopage";
import Helpcenterdescriptionpage from "./pages/Helpcenterdescriptionpage";
import Productssearched from "./pages/Productssearched";
import Wrongcre from "./pages/Wrongcre";
import Registerationsuccess from "./pages/Registerationsuccess"
import Existing from "./pages/Existing";
import Recentorderspage from "./pages/Recentorderspage";
import Addresspage from "./pages/Addresspage"







export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/women/kurta" element={<Women_kurta_catalog_page />} />
          <Route path="/men/shirts" element={<Men_Shirts_catalog_page />} />
          <Route path="/men/kurtas" element={<Men_Kurtas_catalog_page />} />
          <Route path="/men/pants" element={<Men_Pants_catalog_page />} />
          <Route path="/women/tops" element={<Women_tops_catalog_page />} />
          <Route path="/women/jeans" element={<Women_jeans_catalog_page />} />
          <Route path="/women/lengha" element={<Women_lengha_catalog_page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Product />} /> 
          <Route path="/login" element={<Loginpage />}/>
          <Route path="/register" element={<Registerationpage />}/>
          <Route path="/payment/:id" element={<Paymentpage/>}/>
          <Route path="/track/:id" element={<Trackpage/>}/>
          <Route path="/paymentsuccess" element={<PaymentImg/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/Privacy" element={<Privacy/>}/>
          <Route path="/Terms & Conditions" element={<Terms/>}/>
          <Route path="/ProductRating/:product_id" element={<ProductRatingReviewPage/>}/>
          <Route path="/cart" element={<Cartspage/>}/>
          <Route path="/Coupon" element={<Coupon/>}/>
          <Route path="/Wishlist" element={<Wishlist/>}/>
          <Route path="/searchproducts" element={<Productssearched />}/>
          <Route path="/helpcenter" element={<Mainhelpcenterpage />}/>
          <Route path="/helpcenterinfo" element={<Helpcenterinfopage />}/>
          <Route path="/helpcenterdescription" element={<Helpcenterdescriptionpage />}/>
          <Route path="/searchproducts" element={<Productssearched />}/>
          <Route path="/wrongcredentials" element={<Wrongcre />}/>
          <Route path="/successful" element={<Registerationsuccess />}/>
          <Route path="/urexist" element={<Existing />}/>
          <Route path="/recentorders" element={<Recentorderspage />}/>
          <Route path="/address/:id" element={<Addresspage />}/>






        </Routes>
      </BrowserRouter>
    </div>
  );
}