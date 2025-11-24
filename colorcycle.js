// color cycle animation with random colors
// animation for color changing 
const element = document.querySelector('body');

// Array of colors with their names
const colors = [
    "blue",
    "green",
    "lightcoral",
    "darkred",
    "skyblue",
    "maroon",
    "goldenrod",
    "darkcyan",
    "lightgreen",
    "orange"
];

// Shuffle array to randomize order
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Create randomized color sequence
const randomizedColors = shuffleArray(colors);

// Create keyframes from randomized colors
const keyframes = randomizedColors.map(color => ({ backgroundColor: color }));

const animation = element.animate(keyframes, {
  duration: 100000,
  iterations: Infinity
});

// Create RGB to color name mapping
const rgbToName = {};
randomizedColors.forEach(color => {
    const tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = color; // Changed from style.color to style.backgroundColor
    document.body.appendChild(tempDiv);
    const rgb = getComputedStyle(tempDiv).backgroundColor; // Changed from .color to .backgroundColor
    document.body.removeChild(tempDiv);
    rgbToName[rgb] = color;
});

/// Poll animation progress and log color changes
let lastLoggedColorIndex = null;

setInterval(() => {
  if (animation.currentTime == null || !animation.effect) return;

  const duration = animation.effect.getTiming().duration;
  const progress = (animation.currentTime % duration) / duration;
  
  // Calculate which color index we're on
  const colorIndex = Math.floor(progress * randomizedColors.length);
  
  // Only log when we move to a new color
  if (colorIndex !== lastLoggedColorIndex) {
    console.log("Welcome to my website! The current background color is", randomizedColors[colorIndex]);
    lastLoggedColorIndex = colorIndex;
  }
}, 250);



// // animation for color changing with animate function ootb
// const element = document.querySelector('body');

// const animation = element.animate([
//     { backgroundColor: "blue" },
//     { backgroundColor: "green" },
//     { backgroundColor: "lightcoral" },
//     { backgroundColor: "darkred" },
//     { backgroundColor: "skyblue" },
//     { backgroundColor: "maroon" },
//     { backgroundColor: "goldenrod" },
//     { backgroundColor: "darkcyan" },
//     { backgroundColor: "lightgreen" },
//     { backgroundColor: "orange" },
// ], {
//   duration: 100000,
//   iterations: Infinity
// });


// // Poll animation progress
// setInterval(() => {
//   if (animation.currentTime == null || !animation.effect) return;

//   const duration = animation.effect.getTiming().duration;
//   const p = animation.currentTime / duration;

//   const color = getComputedStyle(document.body).backgroundColor;
//   console.log("Current background color:", color);

//   // console.log(`Animation progress: ${(p * 100).toFixed(2)}%`);
//   // console.log("hi");
// }, 2500);
