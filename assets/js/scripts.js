var homepageButton = document.getElementById('homepage-button');
if (homepageButton) {
  homepageButton.onclick = function() {
    location.assign('index.html');
  }
}

var aboutMeButton = document.getElementById('aboutme-button');
if (aboutMeButton) {
  aboutMeButton.onclick = function() {
    location.assign('about.html');
  }
}

var portfolioButton = document.getElementById('portfolio-button');
if (portfolioButton) {
  portfolioButton.onclick = function() {
    location.assign('portfolio.html');
  }
}

var servicesButton = document.getElementById('services-button');
if (servicesButton) {
  servicesButton.onclick = function() {
    location.assign('services.html');
  }
}

var experienceButton = document.getElementById('experience-button');
if (experienceButton) {
  experienceButton.onclick = function() {
    location.assign('experience.html');
  }
}

// Modal functionality for "Email Me" button
document.addEventListener('DOMContentLoaded', function() {
  var emailBtn = document.querySelector('.email button');
  var modal = document.getElementById('emailModal');
  var closeBtn = document.getElementById('closeModal');

  if (emailBtn && modal && closeBtn) {
    emailBtn.onclick = function() {
      modal.style.display = 'flex';
    };
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }
});