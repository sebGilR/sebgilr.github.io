// Scroll indicator
const indicator = document.getElementById('indicator');
const link = indicator.querySelector('a');
const handleIndicator = () => {
  if (window.scrollY >= 1665) {
    link.innerHTML = '<i class="fas fa-angle-up"></i>'
    link.setAttribute('href', '#about');
  } else {
    link.innerHTML = '<i class="fas fa-angle-down"></i>'
    link.setAttribute('href', '#footer');
  }
}

// Progress bar
const bar = document.getElementById('progress');
const progressBar = () => {
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (window.scrollY / height) * 100;
  bar.style.height = scrolled + "%";
}

window.addEventListener('scroll', () => {
  handleIndicator();
  progressBar();
}, false);



