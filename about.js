window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});
document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  //document.getElementById('homepage').scrollIntoView({ behavior: 'smooth' });
  window.location = "homepage.html";
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