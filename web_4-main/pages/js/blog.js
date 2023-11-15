

// Function to toggle fullscreen for the video

const video = document.getElementById('video');
const videoContainer = document.querySelector('.video-container');

videoContainer.addEventListener('click', () => {
  if (document.fullscreenElement === null) {
    videoContainer.requestFullscreen().then(() => {
      // Animate video scale when entering fullscreen

      gsap.to(video, { scale: 1.2, duration: 1 });

    });
  } else {
    document.exitFullscreen().then(() => {
      // Reset video scale when exiting fullscreen

      gsap.to(video, { scale: 1, duration: 1 });

    });
  }
  
});


  


// Function to toggle the chat popup
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  
 
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
  