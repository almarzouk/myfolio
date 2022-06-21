// Progress animation when the offset arrive to the section
// get the spans
let spans = document.querySelectorAll(".the-progress span");
// Get the section
let skills = document.querySelector(".our-skills");
// Scroll to top
// Get the button
let btn = document.querySelector(".scrollTop");

window.onscroll = function () {
  // Show and Hide the button
  window.scrollY >= 1000
    ? btn.classList.add("show")
    : btn.classList.remove("show");
  // check if the offsetTop = skills
  if (this.scrollY >= skills.offsetTop) {
    spans.forEach((span) => {
      // take the width's value for each span from data-width
      span.style.width = span.dataset.width;
    });
  }
};

// Scroll to top on click
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
