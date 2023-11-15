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
  