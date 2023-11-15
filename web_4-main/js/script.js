
//order window
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];

// When the button is clicked, set the modal to 'block'
btn.onclick = function() {
    modal.style.display = 'block';
}

// When the close button inside the modal is clicked, set the modal to 'none'
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


//form validation
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    var reviewName = document.getElementById('reviewName').value;
    var reviewEmail = document.getElementById('reviewEmail').value;
    var reviewText = document.getElementById('reviewText').value;
    var form = document.getElementById('reviewForm');

    // Remove existing error messages
    var existingAlerts = form.querySelectorAll('.custom-alert');
    existingAlerts.forEach(function(alert) {
        alert.remove();
    });

    // Validate name (it should not be empty)
    if (reviewName.trim() === '') {
        showAlert('Name is required', document.getElementById('reviewName'));
        event.preventDefault(); 
    }

    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(reviewEmail)) {
        showAlert('Invalid email address', document.getElementById('reviewEmail'));
        event.preventDefault(); 
    }

    // Validate review text length (at least 30 characters)
    if (reviewText.trim().length < 30) {
        showAlert('Review must be at least 30 characters long', document.getElementById('reviewText'));
        event.preventDefault(); 
    }

    // Function to show custom alert below the element
    function showAlert(message, element) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'custom-alert';
        alertDiv.textContent = message;
        element.parentNode.insertBefore(alertDiv, element.nextSibling);
    }
});





//ASSIK_4
// JavaScript object with properties
let product2Details = {
    name: "Free shipping on orders over $50.",
    price: "30-day money-back guarantee. If you're not satisfied, we'll refund your purchase.",
    description: "Follow us on social media for updates."
  };
  
  // Event listener for click event
  document.getElementById("check").addEventListener("click", function() {
    alert(`${product2Details.name}\n${product2Details.price}\n${product2Details.description}`);
  });
  
  // Event listener for mouseover event 
  document.getElementById("check").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#5c5cce";
  });
  
  // Event listener for mouseout event 
  document.getElementById("check").addEventListener("mouseout", function() {
    this.style.backgroundColor = "#5a5af5";
  });
  
  // Animation using JS function
  function animateProduct() {
    let product = document.getElementById("check");
    product.style.transition = "transform 2s";
    product.style.transform = "translateX(200px)";
  }
  
  animateProduct();
  


// animation for heading
const heading = document.getElementById('fancy-heading');

function animateHeading() {
  gsap.to(heading, {
    color: '#25a244', 
    repeat: -1, 
    yoyo: true, 
    duration: 3, 
    ease: 'power1.inOut' 
  });
}

animateHeading();




document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const productContainer = document.getElementById("prod_it");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the search query
    const searchTerm = searchInput.value.toLowerCase();

    // Check if any product title contains the searched term
    const productTitles = document.querySelectorAll('.product h3.card-title');

    let matchFound = false;

    productTitles.forEach(title => {
      const productTitleText = title.innerText.toLowerCase();

      // Check if the product title contains the searched term
      if (productTitleText.includes(searchTerm)) {
        // Display the matching product by adjusting styles
        const matchingProduct = title.closest('.product');
        matchingProduct.style.zIndex = '1';
        matchingProduct.style.position = 'relative';
        matchingProduct.style.transform = 'scale(1.1)';

        // Scroll to the matching product
        matchingProduct.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });

        matchFound = true;
      } else {
        // Reset styles for non-matching products
        const nonMatchingProduct = title.closest('.product');
        nonMatchingProduct.style.zIndex = '0';
        nonMatchingProduct.style.position = 'static';
        nonMatchingProduct.style.transform = 'scale(1)';
      }
    });

    // If no match found, reset the scroll and apply shake animation
    if (!matchFound) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      animateShake(searchForm);
    }
  });

  // Reset the product display on input focus
  searchInput.addEventListener("focus", function () {
    animateSearchBar(searchForm, true);
    resetProductDisplay();
    searchForm.classList.add("focused");
  });

  // Reset the product display on input blur
  searchInput.addEventListener("blur", function () {
    animateSearchBar(searchForm, false);
    resetProductDisplay();
    searchForm.classList.remove("focused");
  });

  // Function to reset the product display to default (show all products)
  function resetProductDisplay() {
    const allProducts = document.querySelectorAll('.product');
    allProducts.forEach(product => {
      product.style.zIndex = '0';
      product.style.position = 'static';
      product.style.transform = 'scale(1)';
    });
  }

  // Function to animate the search bar on focus/blur
  function animateSearchBar(element, isFocused) {
    const scaleValue = isFocused ? 1.1 : 1;
    const backgroundColor = isFocused ? '#131f63' : '#fff';

    element.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
    element.style.transform = `scale(${scaleValue})`;
    element.style.backgroundColor = backgroundColor;

    // Reset transition after animation completes
    setTimeout(() => {
      element.style.transition = 'none';
    }, 300);
  }

 
});




document.addEventListener("DOMContentLoaded", function () {
  // Get the scroll-to-top button element
  var scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show or hide the button based on scroll position
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }

  // Add click event listener to scroll to the top
  scrollTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
