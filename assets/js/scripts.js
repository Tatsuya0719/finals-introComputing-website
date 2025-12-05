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