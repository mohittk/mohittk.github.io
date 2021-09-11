// Wrap every letter in a span
var textWrapper = document.querySelector('.name-anime1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.name-anime1 .letters',
    scale: [0, 1],
    duration: 1200,
    elasticity:600 ,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.name-anime1',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 2000
  });