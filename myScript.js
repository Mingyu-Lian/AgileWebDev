// day/night mode
// This part is under the help of ChatGPT by ask it to create nightmode function
window.onload = function() {
  document.getElementById('theme').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
  });
};

// print
document.addEventListener('DOMContentLoaded', function() {
  var printButton = document.getElementById('printButton');
  printButton.addEventListener('click', function() {
      window.print(); 
  });
});

//author function in hiding
// This part is under the help of ChatGPT by ask it to create hiding function
function toggleSection(sectionId) {
  var details = document.getElementById("section-details" + sectionId);
  var arrow = document.getElementById("arrow" + sectionId);
  if (details.classList.contains("hidden")) {
      details.classList.remove("hidden");
      arrow.textContent = "▲"; 
  } else {
      details.classList.add("hidden");
      arrow.textContent = "▼"; 
  }
}

// author linkedin alert
// This part is under the help of ChatGPT by ask it to create link arlert function
function LinkedInalert() {
  if (confirm("Go to the LinkedIn Page?")) {
      window.location.href = "https://www.linkedin.com/in/lianmingyu/"; 
  }
}

function Githubalert() {
  if (confirm("Go to the Github Page?")) {
      window.location.href = "https://github.com/Mingyu-Lian"; 
  }
}

// author phone alert
function Phonealert() {
  alert("please call +61(0) 435 718 939, thank you!");
}

// author form button click
// This part is under the help of ChatGPT by ask it to create validation function
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
      event.preventDefault(); 

      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      if (!email || !message) {
          alert('Please fill all the empties, thank you');
          return;
      }
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          alert('Please input valid email adsress, thakn you');
          return;
      }
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      alert('We have recieved your message, thank you');
  });
});

//concept type theme
// This part is under the help of ChatGPT by ask it to create typing aninamtion function
function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
   document.querySelector("#typing-title").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

function startDelete(text, i, fnCallback) {
  if (i >= 5) {
    document.querySelector("#typing-title").innerHTML = text.substring(0, i) +'<span aria-hidden="true"></span>';
    setTimeout(function() {
      startDelete(text, i - 1, fnCallback)
    }, 100);
  }
  else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

function StartTextAnimation() {
  typeWriter("About HYPERLINK", 5, function(){
  
    startDelete("About HYPERLINK...", "About HYPERLINK...".length, function(){
     
      StartTextAnimation();
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  StartTextAnimation();
});






// history carousel
// This part is under the help of ChatGPT by ask it to create images carousel function
let index = 0;

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide img');
  const totalSlides = slides.length;
  generateIndicators(totalSlides);
  updateSlidePosition();

  setInterval(() => {
    index = (index + 1) % totalSlides;
    updateSlidePosition();
  }, 3000); // Change every 3 seconds

  function updateSlidePosition() {
    document.querySelector('.carousel-slide').style.transform = `translateX(${-index * 100}%)`;
    updateIndicators(index);
  }

  function generateIndicators(num) {
    const indicators = document.querySelector('.carousel-indicators');
    for (let i = 0; i < num; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.addEventListener('click', () => {
        index = i;
        updateSlidePosition();
      });
      indicators.appendChild(dot);
    }
  }

  function updateIndicators(activeIndex) {
    const dots = document.querySelectorAll('.carousel-indicators .dot');
    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
});

//concept AJAX
$(document).ready(function(){
  let images = [
    //the reference of the images are following
    //https://depositphotos.com/photos/hyperlink.html
    //https://www.volusion.com/blog/hyperlinks/
    //https://trainings.internshala.com/blog/what-is-hyperlink-in-html/
    //https://blog.mozilla.org/en/internet-culture/why-are-hyperlinks-blue-revisited/
    //https://gshiftlabs.com/what-is-a-hyperlink/
      "source/link1.jpg",
      "source/link2.jpg",
      "source/link3.jpg",
      "source/link4.jpg",
      "source/link5.jpg",
      "source/link6.jpg"
    ]
  let currentIndex = 0;

  $("#imagePlaceholder").attr("src", images[currentIndex]);

  $("#changeImageButton").click(function(){
      currentIndex = (currentIndex + 1) % images.length; 
      $("#imagePlaceholder").attr("src", images[currentIndex]);
  });
});
