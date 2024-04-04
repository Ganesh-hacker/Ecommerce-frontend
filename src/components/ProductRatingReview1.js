import React, { useEffect } from 'react';

const ProductRatingReview1 = () => {
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

      let msg = onStar > 1 ? onStar : onStar;

      // Update state or perform any other necessary action here based on the rating

      const statusMsg = document.querySelector(".status-msg");
      statusMsg.value = ratingMessage;
      statusMsg.innerHTML = ratingMessage;
      document.querySelectorAll("[data-tag-set]").forEach((el) => {
        el.style.display = "none";
      });
      document.querySelector(`[data-tag-set="${onStar}"]`).style.display = "block";
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
  }, []); // Empty dependency array ensures that the effect runs only once after the component mounts

  return (
    // Your JSX content here
    <div className="rating-component">
      {/* Your rating component JSX */}
    </div>
  );
};

export default ProductRatingReview1;
