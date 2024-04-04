import React from "react";
import {useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ProductRatingReview.css';
   const ProductRatingReview = () => {
    const [ratingstars,setstar]=useState(null);
    const backendurl="https://backend-3p4d.onrender.com"
    const { product_id } = useParams();
    const [reviewdetails, setreview] = React.useState({  starinfo: "",feedback:"" });
  useEffect(() => {
   
    const handleMouseOver = (event) => {
      const onStar = parseInt(event.target.dataset.value, 10);
      const stars = event.target.parentNode.querySelectorAll("i.star");
     
      stars.forEach((star, index) => {
        if (index < onStar) {
          star.classList.add("hover");
        } else {
          star.classList.remove("hover");
        }
      });
    };

    const handleMouseOut = (event) => {
      const stars = event.target.parentNode.querySelectorAll("i.star");
      stars.forEach((star) => {
        star.classList.remove("hover");
      });
    };

    const handleStarClick = (event) => {
      const onStar = parseInt(event.target.dataset.value, 10);
      const stars = event.target.parentNode.querySelectorAll("i.star");
      const ratingMessage = event.target.dataset.message;
      setreview(prevreview => ({
        ...prevreview,
        starinfo: ratingMessage
    }));
      let msg = onStar > 1 ? onStar : onStar;

      // Update state or perform any other necessary action here based on the rating
      const statusMsg = document.querySelector(".status-msg");
      statusMsg.value = ratingMessage;
      statusMsg.innerHTML = ratingMessage;
      console.log("rating message ",ratingMessage)
      
      document.querySelectorAll("[data-tag-set]").forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(`[data-tag-set="${onStar}"]`).style.display = "block";
      stars.forEach((star, index) => {
        if (index < onStar) {
          star.classList.add("selected");
        } else {
          star.classList.remove("selected");
        }
      });
    };

    const handleTagClick = (event) => {
      let choosedTagsLength = event.target.parentNode.querySelectorAll("input").length + 1;

      if (event.target.classList.contains("choosed")) {
        event.target.classList.remove("choosed");
        choosedTagsLength -= 2;
      } else {
        event.target.classList.add("choosed");
      }

      if (choosedTagsLength <= 0) {
        document.querySelector(".button-box .done").setAttribute("disabled", "true");
      } else {
        document.querySelector(".button-box .done").removeAttribute("disabled");
      }
    };

    const handleSmileClick = () => {
      document.querySelector(".compliment-container .fa-smile-wink").style.display = "none";
      document.querySelector(".list-of-compliment").style.display = "block";
    };

    const handleDoneClick = () => {
      document.querySelector(".rating-component").style.display = "none";
      document.querySelector(".feedback-tags").style.display = "none";
      document.querySelector(".button-box").style.display = "none";
      document.querySelector(".submited-box").style.display = "block";
      document.querySelector(".submited-box .loader").style.display = "block";

      setTimeout(() => {
        document.querySelector(".submited-box .loader").style.display = "none";
        document.querySelector(".submited-box .success-message").style.display = "block";
      }, 1500);
    };

    // Event bindings
    document.querySelectorAll(".rating-component .star").forEach((star) => {
      star.addEventListener("mouseover", handleMouseOver);
      star.addEventListener("mouseout", handleMouseOut);
      star.addEventListener("click", handleStarClick);
    });

    document.querySelectorAll(".feedback-tags").forEach((tag) => {
      tag.addEventListener("click", handleTagClick);
    });

    document.querySelector(".compliment-container .fa-smile-wink").addEventListener("click", handleSmileClick);

    document.querySelector(".done").addEventListener("click", handleDoneClick);

    // Cleanup function
    return () => {
      document.querySelectorAll(".rating-component .star").forEach((star) => {
        star.removeEventListener("mouseover", handleMouseOver);
        star.removeEventListener("mouseout", handleMouseOut);
        star.removeEventListener("click", handleStarClick);
      });

      document.querySelectorAll(".feedback-tags").forEach((tag) => {
        tag.removeEventListener("click", handleTagClick);
      });

      document.querySelector(".compliment-container .fa-smile-wink").removeEventListener("click", handleSmileClick);

      document.querySelector(".done").removeEventListener("click", handleDoneClick);
    };

    
  }, []);
  function handleChange(event) {
    
    setreview(prevreview => ({
        ...prevreview,
        feedback:event.target.value
    }));
}

  async function handleSubmit(event) {
    
    event.preventDefault();
    
   
   
    const username = localStorage.getItem("username");
    console.log(product_id)
    console.log(reviewdetails)
    try {
        const response = await fetch(`${backendurl}/review/${username}/${product_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewdetails),
        });

        if (response.ok) {
            console.log("REVIEW:",reviewdetails)
          
        } else {
          console.log("REVIEW:",reviewdetails)
        }
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div class = "body1">
    <div class="wrapper">
    <div class="master">
      <h1>Review</h1>
  
      <h2>How was your experience about our product?</h2>
      <div class="rating-component">
        <div class="status-msg">
          <label>
            <input class="rating_msg" type="hidden" name="rating_msg" value="" />
          </label>
        </div>
        <div class="stars-box">
          <i class="star fa fa-star" title="1 star" data-message="Poor" data-value="1"></i>
          <i class="star fa fa-star" title="2 stars" data-message="Too bad" data-value="2"></i>
          <i class="star fa fa-star" title="3 stars" data-message="Average" data-value="3"></i>
          <i class="star fa fa-star" title="4 stars" data-message="Nice" data-value="4"></i>
          <i class="star fa fa-star" title="5 stars" data-message="very good quality" data-value="5"></i>
        </div>
        <div class="starrate">
          <label>
            <input class="ratevalue" type="hidden" name="rate_value" value="" />
          </label>
        </div>
      </div>
  
      <div class="feedback-tags">
        <div class="tags-container" data-tag-set="1">
          <div class="question-tag">
            Why was your experience so poor?
          </div>
        </div>
        <div class="tags-container" data-tag-set="2">
          <div class="question-tag">
            Why was your experience so bad?
          </div>
  
        </div>
  
        <div class="tags-container" data-tag-set="3">
          <div class="question-tag">
            Why was your experience is Average ?
          </div>
        </div>
        <div class="tags-container" data-tag-set="4">
          <div class="question-tag">
            Why not 5 stars?
          </div>
        </div>
  
        <div class="tags-container" data-tag-set="5">
          <div class="make-compliment">
            <div class="compliment-container">
              Give a compliment
              <i class="far fa-smile-wink"></i>
            </div>
          </div>
        </div>
  
        <div class="tags-box">
          <input type="text" class="tag form-control" textarea required = "true" name="feedback" onChange={handleChange} value={reviewdetails.feedback} id="inlineFormInputName" placeholder="please enter your review"/>
          <input type="hidden" name="product_id" value="{{ $products->id }}" />
        </div>
  
      </div>
  
      <div className="button-box">
  <    button className="done btn btn-warning" onClick={handleSubmit}>Add review</button>
      </div>
       
      <div class="submited-box">
        <div class="loader"></div>
        <div class="success-message">
          Thank you!
        </div>
      </div>
    </div>
  
</div>
</div>

  );
};


export default ProductRatingReview;
