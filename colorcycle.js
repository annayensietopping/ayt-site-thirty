
// animation for color changing 
const element = document.querySelector('body');

const animation = element.animate([
    { backgroundColor: "blue" },
    { backgroundColor: "green" },
    { backgroundColor: "lightcoral" },
    { backgroundColor: "darkred" },
    { backgroundColor: "skyblue" },
    { backgroundColor: "maroon" },
    { backgroundColor: "goldenrod" },
    { backgroundColor: "darkcyan" },
    { backgroundColor: "lightgreen" },
    { backgroundColor: "orange" },
], {
  duration: 100000,
  iterations: Infinity
});


// Poll animation progress
setInterval(() => {
  if (animation.currentTime == null || !animation.effect) return;

  const duration = animation.effect.getTiming().duration;
  const p = animation.currentTime / duration;

  const color = getComputedStyle(document.body).backgroundColor;
  console.log("Current background color:", color);

  // console.log(`Animation progress: ${(p * 100).toFixed(2)}%`);
  // console.log("hi");
}, 2500);
