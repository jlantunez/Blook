document.addEventListener("keydown", (event) => {
  let link;

  if (event.key === "ArrowRight") {
    link = document.querySelector('.post-navigation a[rel="next"]');
  } else if (event.key === "ArrowLeft") {
    link = document.querySelector('.post-navigation a[rel="prev"]');
  }

  if (link) {
    location.assign(link.href);
  }
});
