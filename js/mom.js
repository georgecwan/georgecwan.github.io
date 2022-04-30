function play() {
  document.getElementsByTagName("body").item(0).style.background = '#ccdbc8';
  document.querySelector(":root").style.setProperty('--htmlafter', '#c7c7a1');
  document.getElementById("audio").play();
  document.getElementById("greeting").style.animationPlayState = 'running';
  document.getElementById("wishing").style.animationPlayState = 'running';
  const flowers = document.getElementsByClassName("flower");
  for (let i = 0; i < flowers.length; i++) {
    flowers.item(i).style.animationPlayState = 'running';
  }
  const confettis = document.getElementsByClassName("confetti-piece");
  for (let i = 0; i < confettis.length; i++) {
    confettis.item(i).style.animationPlayState = 'running';
  }
  document.getElementById("start").style.display = 'none';
}

// BUTTON
