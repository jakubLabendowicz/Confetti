var animationNumber = 0;

function generate() {
  const animationSection = document.createElement("div");
  animationSection.classList.add("animationSection");
  animationSection.id = "animationSection" + animationNumber;
  animationSection.dataset.animationNumber = animationNumber;
  const body = document.querySelector("body");
  body.appendChild(animationSection);

  for (var i = 0; i < 100; i++) {
    const animationItem = document.createElement("div");
    animationItem.classList.add("animationItem");
    animationItem.style.left = `${Math.random()*100}vw`;
    animationItem.style.top = `calc(-${Math.random()*500}px - 100px)`;
    animationItem.style.transform = `rotate(${Math.random()*360}deg)`;
    var leftright = Math.round(Math.random()*1);
    if (leftright == 0) {
      animationItem.style.animation = `itemAnimationLeft calc(${Math.random()*5}s + 1s)`;
    } else if (leftright == 1) {
      animationItem.style.animation = `itemAnimationRight calc(${Math.random()*5}s + 1s)`;
    }

    const animationSection = document.querySelector("#animationSection" + animationNumber);
    animationSection.appendChild(animationItem);
  }

  animationNumber++;

  setTimeout(function() {
    animationSection.remove();
  }, 6000);
}