// script.js
// Function to handle login link click
/*document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior (optional)

    // Replace alert with actual login functionality
    alert("Login clicked! Implement your login logic here.");
});
// Function to handle register link click
document.getElementById("registerLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior (optional)
    // Replace alert with actual register functionality
    alert("Register clicked! Implement your registration logic here.");
});*/

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        window.scrollTo({
            top: section.offsetTop - 50, // Adjust offset as needed
            behavior: 'smooth'
        });
    });
});

// Function to handle login link click
document.getElementById("loginLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior (optional)
// Replace alert with actual login functionality
//alert("Login clicked! Implement your login logic here.");
    window.location = "index.html";
});

/*Function to handle register link click
document.getElementById("registerLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior (optional)

    // Replace alert with actual register functionality
    alert("Register clicked! Implement your registration logic here.");
});

// Function to toggle navbar on small screens
function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}*/
//script for about us and contact
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//about
document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    //document.getElementById('homepage').scrollIntoView({ behavior: 'smooth' });
    window.location = "about.html";
  });
//contact
document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    //document.getElementById('homepage').scrollIntoView({ behavior: 'smooth' });
    window.location = "about.html";
  });
