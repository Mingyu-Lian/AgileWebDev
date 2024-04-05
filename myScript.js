
// day/night mode
window.onload = function() {
  document.getElementById('theme').addEventListener('click', function() {
    document.body.classList.toggle('night-mode');
  });
};


//author function in hiding
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
function LinkedInalert() {
  if (confirm("Go to the LinkedIn Page?")) {
      window.location.href = "https://www.linkedin.com/in/lianmingyu/"; 
  }
}

// author phone alert
function Phonealert() {
  alert("please call +61(0) 435 718 939, thank you!");
}

// author form button click
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

