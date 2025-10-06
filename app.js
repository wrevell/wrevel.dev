// mostly, if not all, used from Train To Code's tutorial on this topic. see his video here -> https://www.youtube.com/watch?v=nDPsLFPzVEA
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("inview");
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('#entercontroller').forEach(el => {
  observer.observe(el);
});
